import { Etat } from "../enum/Etat";
import { Resources } from "../enum/Resources";
import { TypeApi } from "../enum/TypeApi";
import { Tags } from "./Tags";

export class ApiDto {
	idApi:number;
    idIntervenant:number;
	idCategorie:number;
	nomApi:String;
	description:String;
    type :TypeApi;
	etat:Etat;
	 image:String;
	 listFiles :String;
	 url:String;
	 version:String;
     isDefault:boolean;
     dateVersion: Date;
	 nomIntervenant: String;
	 tags:String[];
     nomCategorie: String;
     resources:Resources[];

    constructor(){
        
    }


   

}