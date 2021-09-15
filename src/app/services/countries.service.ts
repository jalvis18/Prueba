import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private serverUrl: string = "https://restcountries.com/v3"

  constructor(private http: HttpClient) {
   }

   getCountries(){
    return this.http.get('https://restcountries.com/v3' + 'all');
  }

  //obtener todos los Paises
  findAll() :Observable<Response>{
    return this.http.get<Response>(this.serverUrl+'all')
  }

  //obtener uno solo
  getSingleCountry(code: string): Observable<Response>{
    return this.http.get<Response>(this.serverUrl+'alpha'+code)
  }

  getByNAme (name: string): Observable<Response>{
    return this.http.get<Response>(this.serverUrl+'name'+name)
  }

}
