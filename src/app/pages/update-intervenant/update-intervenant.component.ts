import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypeAdministration } from 'src/app/enum/TypeAdministration';
import { Intervenant } from 'src/app/model/Intervenant';
import { IntervenantService } from 'src/app/services/intervenant-service.service';

@Component({
  selector: 'app-update-intervenant',
  templateUrl: './update-intervenant.component.html',
  styleUrls: ['./update-intervenant.component.css']
})
export class UpdateIntervenantComponent implements OnInit {

  currentIntervenant : Intervenant;
  id: number;
  submitted =false;  
  selectedAdministraion : any ;
  printedAdmin : any;
  administration: TypeAdministration = 0;


  types=[
    {name : "ministeres", value: TypeAdministration.ministeres},
    {name : "collectivité_locale", value: TypeAdministration.collectivité_locale},
    {name : "etablissement_public_administratif", value: TypeAdministration.etablissement_public_administratif},
    {name : "etablissement_public_non_administratif", value: TypeAdministration.etablissement_public_non_administratif},
    {name : "entreprise_public", value: TypeAdministration.entreprise_public}

  ]
  print() {
    this.printedAdmin = this.selectedAdministraion;
  }
  selectedChangeHandler (event : any){
    this.currentIntervenant.administration = event.target.value;
  }
  constructor(private activatedRoute:ActivatedRoute ,private iService:IntervenantService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    console.log(this.id);
    this.iService.getIntervenantById(this.id).subscribe(
      (response: Intervenant) => {
        this.currentIntervenant = response;
        console.log(this.currentIntervenant);
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
         }
    );
  }
  onSubmit(){
    this.submitted = true;

    this.iService.updateIntervenant(this.currentIntervenant).subscribe(data => 
      console.log(data), error => console.log(error));
  }

}
