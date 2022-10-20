import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  viewtrain=()=>{
    return this.http.get("http://localhost:8080/trainView")
  }
  addtrain=(data:any)=>{
    return this.http.post("http://localhost:8080/trainAdd",data)
  }
  deletetrain=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteTrain",data)
  }
}
