import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Heroe} from "../models/heroe.model";

const baseUrl = 'http://localhost:3000/heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  constructor(private  http: HttpClient) { }

  getAll(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(baseUrl);
  }

  get(id: any): Observable<Heroe>{
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any>{
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any>{
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any>{
    return this.http.delete(baseUrl);
  }

  findByName(name: any) :Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${baseUrl}?name=${name}`);
  }
}
