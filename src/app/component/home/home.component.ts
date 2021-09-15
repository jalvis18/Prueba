import { Component, OnInit } from '@angular/core';
import {CountriesService } from 'src/app/services/countries.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'

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

  constructor( private fb: FormBuilder, private countries: CountriesService) {
    
      this.createForm();
    
   }

  ngOnInit(): void {
    this.getCountry();
  }

  createForm() {

    this.formComponent = this.fb.group({
      country: ["", Validators.required],
      language: [""],
      currency: [""],
      region: [""]
    })
  }

  getCountry() {
    this.countries.getCountries();
  }

  onChange(value) {
    this.text = value;
  }

}
