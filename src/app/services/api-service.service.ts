import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Api } from '../model/Api';
import { ApiDto } from '../model/ApiDTO';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  listApis : Observable<ApiDto[]> = this.getApis() ;
  api : ApiDto = new ApiDto;
private apiServerUrl = environment.apiBaseUrl;


  constructor(private http : HttpClient) { }
  public getApis(): Observable<ApiDto[]>{
    return this.http.get<ApiDto[]>(`${this.apiServerUrl}/api/apis`);
}
public getApisa(): Observable<Api[]>{
  return this.http.get<Api[]>(`${this.apiServerUrl}/api/apis/list`);
}
public addApi(data: ApiDto):Observable<any>{
    return this.http.post(`${this.apiServerUrl}/api/apis`, data);
}
public deleteApi(id : number):void {
     this.http.delete(`${this.apiServerUrl}/api/apis/${id}`);
}
public updateApi(data : ApiDto):Observable<any>{
  return this.http.put(`${this.apiServerUrl}/api/apis`, data);
}
public getApi(id : number):Observable<ApiDto>{
  return this.http.get<ApiDto>(`${this.apiServerUrl}/api/apis/${id}`);
   
}



}
