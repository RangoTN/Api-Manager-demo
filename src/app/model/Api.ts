import { Etat } from "../enum/Etat";
import { Resources } from "../enum/Resources";
import { TypeApi } from "../enum/TypeApi";
import { Intervenant } from "./Intervenant";
import { Tags } from "./Tags";

export class Api {
    idApi:number;
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
	 intervenant: Intervenant;
	 tags:Tags[];
     nomCategorie: String;
     resources:Resources[];

    constructor(){
        
    }


   

}