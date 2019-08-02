import { Injectable } from '@angular/core';
import { GeneralServiceService } from './general-service.service';
import { map, catchError } from 'rxjs/operators';
import { Product, Auto, Slika, ProductWrapper } from '../models/domains';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProizvodiServisService {

  constructor(private generalService: GeneralServiceService) { }

  getAllProductForUser(): Observable<Product[]> {
    
    return this.generalService.get('products/dajproizvodekorisnika').pipe(
        map((response => response as Product[]),
        catchError((error =>  error => console.log("")))
      ));
    }

    getAllProductForUser2(): Observable<JSON> {
    
      return this.generalService.get('products/dajproizvodekorisnika2').pipe(
          map((response => response as JSON),
          catchError((error =>  error => console.log("")))
        ));
      }

    snimiProizvodAuto(auto: Auto): Observable<Auto> {
      return this.generalService.post('automobil/snimiauto', auto).pipe(
        map((response => response as Auto),
        catchError((error =>  error => console.log("")))
      ));
    }

    azurirajProizvodAuto(auto: Auto): Observable<Auto> {
      return this.generalService.put('azurirajauto', auto).pipe(
        map((response => response as Auto),
        catchError((error =>  error => console.log("")))
      ));
    }

    dohvatiSveDostupneProizvode(): Observable<Product[]> {

      return this.generalService.get('products/sviproizvodi').pipe(
          map((response => response as Product[]),
          catchError((error =>  error => console.log("")))
        ));
      }

getProductById(_id: number): Observable<Product> {

   return this.generalService.get('products/getproductbyid/' + _id).pipe(
        map((response => response as Product),
        catchError((error =>  error => console.log("")))
      ));
  
};

postaviGlavnuSliku(productId: number, id: number): Observable<Slika[]> {
  return this.generalService.post('proizvodislike/' + productId + '/postaviglavnu/' + id, {})
  .pipe(map((response => response as Slika[]),
  catchError((error => error => console.log("")))
  ));
};
   


createProduct(product: Product): Observable<Product> {
    return this.generalService.post('products/saveproduct', product)
    .pipe(map((response => response as Product),
    catchError((error => error => console.log("")))
    ));
};

updateProduct(product: Product): Observable<Product> {
    return this.generalService.put('products/updateproduct', product)
    .pipe(map((response => response as Product),
    catchError((error => error => console.log("")))
    ));
}

deleteProduct(_id: number): Observable<any> {
    return this.generalService.delete('products/' + _id)
    .pipe(map((response => response as any),
    catchError((error => error => console.log("")))
    ));
}

dohvatiTipoveProizvoda() {
  return this.generalService.get('general/tipovi')
    .pipe(map((response => response as any),
    catchError((error => error => console.log("")))
    ));
}



}
