import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EtatApi } from '../model/EtatApi';

@Injectable({
  providedIn: 'root'
})
export class EtatApiService {

 
  listEtats: Observable<EtatApi[]> = this.getEtatApis() ;
  etat:EtatApi=new EtatApi();

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http : HttpClient) { }

  public getEtatApis():Observable<EtatApi[]>{
    return this.http.get<EtatApi[]>(`${this.apiServerUrl}/api/EtatApis/list`);
  }

  public addEtatApi(data: EtatApi):Observable<any>{
    return this.http.post(`${this.apiServerUrl}/api/EtatApis/add`, data);
}

public deleteEtatApi(id : number):Observable<EtatApi>{
  return this.http.delete<EtatApi>(`${this.apiServerUrl}/api/EtatApis/delete/${id}`);
}

public updateEtatApi(data : EtatApi):Observable<any>{
  return this.http.put(`${this.apiServerUrl}/api/EtatApis/update`, data);
}

public getEtatApiById(id: number):Observable<EtatApi>{
  return this.http.get<EtatApi>(`${this.apiServerUrl}/api/EtatApis/getById/${id}`);
}
}
