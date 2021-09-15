import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private serverUrl: string = "https://restcountries.eu/rest/v2/all";

  constructor(private http: HttpClient) {
   }

   //toda la info de los paises
   getCountries(){
    console.log('Viene del servicio')
    return this.http.get(this.serverUrl).subscribe( countrynames =>{
      console.log(countrynames);
    });
  }

  //Obtener solo en nombre
  getByNAme (name: string): Observable<Response>{
    console.log('desde el servidor');
    return this.http.get<Response>(this.serverUrl+'name'+name);
    
  }

  //obtener todos los Paises
  /* findAll() :Observable<Response>{
    return this.http.get<Response>(this.serverUrl+'all')
  }

  //obtener uno solo
  getSingleCountry(code: string): Observable<Response>{
    return this.http.get<Response>(this.serverUrl+'alpha'+code)
  }

  
 */
}
