import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Application } from '../model/Application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService{

  listApplication: Observable<Application[]> = this.getApplication() ;


  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http : HttpClient) { }

  public getApplication():Observable<Application[]>{
    return this.http.get<Application[]>(`${this.apiServerUrl}/api/Applications/list`);
  }


  public addApplication(data: Application):Observable<any>{
    return this.http.post(`${this.apiServerUrl}/api/Applications/add`, data);
}

public deleteApplication(id : number):Observable<Application>{
  return this.http.delete<Application>(`${this.apiServerUrl}/api/Applications/getById/${id}`);
}

public updateApplication(data : Application):Observable<any>{
  return this.http.put(`${this.apiServerUrl}/api/Applications/update`, data);
}

public getApplicationById(id: number):Observable<Application>{
  return this.http.get<Application>(`${this.apiServerUrl}/api/Applications/getById/${id}`);
}

}
