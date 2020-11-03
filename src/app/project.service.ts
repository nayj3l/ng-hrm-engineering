import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private url:string = "/assets/json/projects.json";

  constructor(private http:HttpClient) { }

  getProjectList(){
    return this.http.get(this.url);
  }

}