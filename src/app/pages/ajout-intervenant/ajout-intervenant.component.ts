import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TypeAdministration } from 'src/app/enum/TypeAdministration';
import { TypeIntervenant } from 'src/app/enum/TypeIntervenant';
import { Intervenant } from 'src/app/model/Intervenant';
import { IntervenantService } from 'src/app/services/intervenant-service.service';

@Component({
  selector: 'app-ajout-intervenant',
  templateUrl: './ajout-intervenant.component.html',
  styleUrls: ['./ajout-intervenant.component.css']
})
export class AjoutIntervenantComponent implements OnInit {

  intervenant: Intervenant = new Intervenant();
  submitted = false;
  alert : boolean = false;
  form!:FormGroup
  constructor(private iService: IntervenantService,private formBuilder: FormBuilder) { }


  selectedAdministraion : any ;
  printedAdmin : any;
 
  

  selectedType:any;
  printedType:any;
 
  

  types=[
    {name : "ministeres", value: TypeAdministration.ministeres},
    {name : "collectivité_locale", value: TypeAdministration.collectivité_locale},
    {name : "etablissement_public_administratif", value: TypeAdministration.etablissement_public_administratif},
    {name : "etablissement_public_non_administratif", value: TypeAdministration.etablissement_public_non_administratif},
    {name : "entreprise_public", value: TypeAdministration.entreprise_public}

  ]
  intervenants=[
    {name:"Fournisseur",value : TypeIntervenant.Fournisseur},
    {name:"Client",value : TypeIntervenant.Client}
  ]
  print() {
    this.printedAdmin = this.selectedAdministraion;
    console.log(this.printedAdmin);
  }
  
  println(){
    this.printedType  = this.selectedType;
  }
  selectedChangeHandler (event : any){
    this.intervenant.administration = event.target.value;
  }
  selectedChangeHandler1 (event : any){
    this.intervenant.type = event.target.value;
  }
  ngOnInit() {
    
    this.form = this.formBuilder.group({
      name:['',Validators.required],
      numTel:['',Validators.required],
      email:['',Validators.required],
      typeadmin:['',Validators.required],
      typeintervenants:['',Validators.required]
     });
    
  }


  onSubmit() {
    this.submitted = true;
    if(this.form.invalid){
      return
    }
  
    this.iService.AjoutIntervenant(this.intervenant)
    .subscribe(data => {this.alert=true;
      console.log(data)},
      (error:any) =>{console.log(error)});

  }
  closeAlert(){
    this.alert = false;
    window.location.reload();
  }

}
