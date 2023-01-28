import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  get(url:any){
    return this.http.get(url);
  }

  post(url:any,data:any){
    return this.http.post(url,data)
  }

  put(url:any,data:any){
    return this.http.put(url,data)
  }

  delete(url:any){
    return this.http.delete(url)
  }
}
