import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: any, term: any): any {
  
    //check if serch term is undefined
    if (term === undefined) return products;

    //return updated product array

    return products.filter(function(product){
      return product.productName.toLowerCase().includes(term.toLowerCase());
    });
  }

}
