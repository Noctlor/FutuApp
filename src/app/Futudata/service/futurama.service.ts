import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Futurama } from '../interface/futurama.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuturamaService {

  private api:string = "https://futuramaapi.herokuapp.com/api/v2/"

  constructor(private http:HttpClient) { }

  buscarpersonaje(termino:string):Observable<Futurama[]>{
    const url=`${this.api}characters?search=${termino}`
    return this.http.get<Futurama[]>(url);
  }
}
