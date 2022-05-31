import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Etat } from 'src/app/enum/Etat';
import { Resources } from 'src/app/enum/Resources';
import { TypeApi } from 'src/app/enum/TypeApi';
import { ApiDto } from 'src/app/model/ApiDTO';
import { EtatApi } from 'src/app/model/EtatApi';
import { Intervenant } from 'src/app/model/Intervenant';
import { ApiService } from 'src/app/services/api-service.service';
import { EtatApiService } from 'src/app/services/etat-api.service';
import { IntervenantService } from 'src/app/services/intervenant-service.service';

@Component({
  selector: 'app-ajout-api',
  templateUrl: './ajout-api.component.html',
  styleUrls: ['./ajout-api.component.css']
})
export class AjoutApiComponent implements OnInit {

  api : ApiDto = new ApiDto();
  fournisseurs: Intervenant[]=[];
  resource:Resources[]= [];
  etats:EtatApi[]=[];
  lstFiles : string ='';
  submitted = false;

  selectedFournisseur:any;
  printedFournisseur:any;
  selectedType:any;
  printedType:any;
  DateSelected:Date;
  selectedEtat:any;
  printedEtat:any;
  alert: boolean = false;
  form!:FormGroup
  isselected:boolean;
 
  

  
  types=[
    {name : "Rest", value : TypeApi.Rest},
    {name : "SOAP", value : TypeApi.SOAP},
    {name : "Graphql", value : TypeApi.Graphql},
  ]
 
  listResources=[
    {name:"POST", value : Resources.POST},
    {name:"GET", value : Resources.GET},
    {name:"PUT", value : Resources.PUT},
    {name:"DELETE", value : Resources.DELETE},
    {name:"PATCH", value : Resources.PATCH}
  ]


  constructor(private apiService:ApiService,private etatService:EtatApiService,private intervenantService:IntervenantService,private formBuilder: FormBuilder) { }

  selectEtat(event :any){ 
    this.api.etat =event.target.value;
  }
   
  print(){
    this.printedEtat = this.selectedEtat;
  }


  selectFournisseur(event : any){
    this.api.nomIntervenant =event.target.value;
  }
  print1(){
    this.printedFournisseur = this.selectedFournisseur;
  }
  selectType(event : any){
    this.api.type =event.target.value;
  }
  print2(){
    this.printedType = this.selectedType;
  }
  fetchDate(event : any){
   this.api.dateVersion =event.target.value;
  }
  
  ngOnInit(): void {
    this.getFournisseurs();
    this.getEtats();
    this.print2();
      this.form = this.formBuilder.group({
       nameApi:['',Validators.required],
       version:['',Validators.required],
       dateVersion:['',Validators.required],
       fournisseur:['',Validators.required],
       type:['',Validators.required],
       etat:['',Validators.required],
       url:['',Validators.required]

      })
  }
  onSubmit(){
        
    this.submitted = true;
    if(this.form.invalid){
      return
    }
    this.checked(event);
    this.onChange(event);
    this.api.resources = this.resource;
  
  
  }
  onChange(event:any){
   if(event.target.checked){
     this.resource.push(event.target.checked);
     console.log(this.resource);
   }else{
     this.resource = [];
   }
  }
  checked(event:any){
    if(event.target.checked){
      this.api.isDefault = true;
    }else{
      this.api.isDefault= false;
    }
  }

  public getFournisseurs(): void {
    this.intervenantService.getAllFournisseurs().subscribe(
      (response: Intervenant[]) => {
      this.fournisseurs = response;},
    (error : HttpErrorResponse) => {
      alert(error.message);
    });
  }
  closeAlert(){
    this.alert = false;
    window.location.reload();
  }
  save(event:any): void {
    var selectFile = event.target.files;
    for(var i =0 ; i< selectFile.length;i++){
      this.lstFiles += 'file name: '+selectFile[i].name;
      this.lstFiles += 'file size (bytes): '+selectFile[i].size;
      this.lstFiles += 'file type: '+selectFile[i].type;
         console.log(this.lstFiles);
     }
    }
    public getEtats(): void {
      this.etatService.getEtatApis().subscribe(
        (response: EtatApi[]) => {
        this.etats = response;},
      (error : HttpErrorResponse) => {
        alert(error.message);
      });
    }

}
