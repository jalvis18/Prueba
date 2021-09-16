import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any[]): any {
    const countryResult = [];
    for (const country of value){
      if(country.name.indexOf(args) >- 1){
        console.log('SIP')
      }
    }
  }

}
