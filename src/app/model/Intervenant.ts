import { TypeAdministration } from "../enum/TypeAdministration";
import { TypeIntervenant } from "../enum/TypeIntervenant";
import { Application } from "./Application";


export class Intervenant{
    idIntervenant : number = 0;
    nomIntervenant : string = '';
    adresse : string = '' ;
    email : string = '';
    num_tel : string ='';
    fax : string= '';
    administration : TypeAdministration = TypeAdministration.entreprise_public;
    type : TypeIntervenant= TypeIntervenant.Fournisseur;
    applications: Application[];
   
    constructor(){}
}