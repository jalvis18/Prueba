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

  constructor( private fb: FormBuilder, private src: CountriesService) {
    
      this.createForm();
   }

  ngOnInit(): void {
  }

  createForm() {

    this.formComponent = this.fb.group({
      country: ["", Validators.required],
      language: [""],
      currency: [""],
      region: [""]
    })
    /* console.log(this.formComponent) */
  }

  getCountry() {
    this.src.getCountries().subscribe(res=>{
      console.log(res[0])
    })
  }

  onChange(value) {
    this.text = value;
  }

}
