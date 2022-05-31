import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Intervenant } from '../model/Intervenant';

@Injectable({
  providedIn: 'root'
})
export class IntervenantService {

  private apiServerUrl = environment.apiBaseUrl;

    constructor(private http : HttpClient) {}

    public getIntervenants(): Observable<Intervenant[]>{
        return this.http.get<Intervenant[]>(`${this.apiServerUrl}/api/Intervenants/list`);
    }
    
    public AjoutIntervenant(data: Intervenant):Observable<any>{
      return this.http.post(`${this.apiServerUrl}/api/Intervenants/add`, data);
    }
    public deleteIntervenant(id : number):Observable<any>{
      return this.http.delete(`${this.apiServerUrl}/api/Intervenants/delete/${id}`);
    }
   
    public updateIntervenant(data : Intervenant):Observable<any>{
      return this.http.put(`${this.apiServerUrl}/api/Intervenants/update`, data);
    }
    public getIntervenantById(id : number):Observable<Intervenant>{
      return this.http.get<Intervenant>(`${this.apiServerUrl}/api/Intervenants/getById/${id}`);
       
    }
    public getFournisseursByName(nom : string): Observable<any>{
      return this.http.get<number>(`${this.apiServerUrl}/api/fournisseurs/IdNom/${nom}`);
    }
    public getAllClients(): Observable<Intervenant[]>{
      return this.http.get<Intervenant[]>(`${this.apiServerUrl}/api/Intervenants/getClients`);
    }
    public getAllFournisseurs(): Observable<Intervenant[]>{
      return this.http.get<Intervenant[]>(`${this.apiServerUrl}/api/Intervenants/getFournisseurs`);
    }
    
}
