import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { countriesDto } from 'src/app/models/countriesDTO';



@Component({
  providers: [CountriesService],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formComponent: FormGroup;
  public text: string;
  public countryText: string;
  private serverUrl: string = "https://restcountries.eu/rest/v2/";
  country:any[] = [];
  name: any[] = [];

  constructor(private fb: FormBuilder, private countries: CountriesService, private http: HttpClient) {

    this.createForm();
    this.getCountry();
    /* this.getRegion(); */

  }

  filterCountry = '';

  ngOnInit(): void {

  }

  createForm() {

    this.formComponent = this.fb.group({
      country: [""],
      language: [""],
      currency: [""],
      region: [""]
    })
  }

  getCountry() {
    this.http.get<countriesDto>(this.serverUrl + 'all').subscribe((resp: any) => {
      this.country = resp
      console.log(resp);


    });
  }

  /* getRegion() {
    this.http.get(this.serverUrl + 'region').subscribe((resp: any) => {
      this.name = resp
      console.log(resp);
    });
  } */


}
