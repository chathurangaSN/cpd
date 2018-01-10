import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, term: any): any {
  
    //check if serch term is undefined
    if (term === undefined) return value;

    //return updated product array

    if (value === null) return 'Not assigned';
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
