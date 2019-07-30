import { Injectable } from '@angular/core';
import { GeneralServiceService } from './general-service.service';
import { map, catchError } from 'rxjs/operators';
import { Product, Auto } from '../models/domains';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProizvodiServisService {

  constructor(private generalService: GeneralServiceService) { }

  getAllProductForUser(): Observable<Product[]> {
    return this.generalService.get('products').pipe(
        map((response => response as Product[]),
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

    dohvatiSveDostupneProizvode(): Product[] {
      var products = Array<Product>();

      products = [{
        "id": 1,  
        "adresa": "Nancy Davolio",
        "opis": "Premier Buy",
        "cijena": 1740,
        "tipProizvoda": 2,
        "tipProizvodaOpis": "Opis proizvoda 2",
        "auto": {
          "id": 1,
          "boja": "Crna",
          "godiste": new Date(),
          "grijaciSjedista": true,
          "kilometri": 120000,
          "klima": true,
          "marka": "Audi",
          "motor": "Dizel",
          "opis": "Auto je jako dobar",
          "podizaciStakala": true,
          "registrovan": true,
          "servoVolan": true,
          "siber": true,
          "status": 1,
          "xenoni": true,
          "zastita": true
        }
    },
    {
      "id": 2,
      "adresa": "Nancy Davolio",
      "opis": "Premier Buy",
      "cijena": 1740,
      "tipProizvoda": 2,
      "tipProizvodaOpis": "Opis proizvoda 2",
      "auto": {
        "id": 1,
        "boja": "Crna",
        "godiste": new Date(),
        "grijaciSjedista": true,
        "kilometri": 120000,
        "klima": true,
        "marka": "Audi",
        "motor": "Dizel",
        "opis": "Auto je jako dobar",
        "podizaciStakala": true,
        "registrovan": true,
        "servoVolan": true,
        "siber": true,
        "status": 1,
        "xenoni": true,
        "zastita": true
      }
    },
    {
      "id": 3,
      "adresa": "Nancy Davolio",
      "opis": "Premier Buy",
      "cijena": 1740,
      "tipProizvoda": 2,
      "tipProizvodaOpis": "Opis proizvoda 2",
      "auto": {
        "id": 1,
        "boja": "Crna",
        "godiste": new Date(),
        "grijaciSjedista": true,
        "kilometri": 120000,
        "klima": true,
        "marka": "Audi",
        "motor": "Dizel",
        "opis": "Auto je jako dobar",
        "podizaciStakala": true,
        "registrovan": true,
        "servoVolan": true,
        "siber": true,
        "status": 1,
        "xenoni": true,
        "zastita": true
      }
    },
    {
      "id": 4,
        "adresa": "Nancy Davolio",
        "opis": "Premier Buy",
        "cijena": 1740,
        "tipProizvoda": 2,
        "tipProizvodaOpis": "Opis proizvoda 2",
        "auto": {
          "id": 1,
          "boja": "Crna",
          "godiste": new Date(),
          "grijaciSjedista": true,
          "kilometri": 120000,
          "klima": true,
          "marka": "Audi",
          "motor": "Dizel",
          "opis": "Auto je jako dobar",
          "podizaciStakala": true,
          "registrovan": true,
          "servoVolan": true,
          "siber": true,
          "status": 1,
          "xenoni": true,
          "zastita": true
        }
    },
    {
      "id": 5,
        "adresa": "Nancy Davolio",
        "opis": "Premier Buy",
        "cijena": 1740,
        "tipProizvoda": 2,
        "tipProizvodaOpis": "Opis proizvoda 2",
        "auto": {
          "id": 1,
          "boja": "Crna",
          "godiste": new Date(),
          "grijaciSjedista": true,
          "kilometri": 120000,
          "klima": true,
          "marka": "Audi",
          "motor": "Dizel",
          "opis": "Auto je jako dobar",
          "podizaciStakala": true,
          "registrovan": true,
          "servoVolan": true,
          "siber": true,
          "status": 1,
          "xenoni": true,
          "zastita": true
        }
    },
    {
      "id": 6,
      "adresa": "Nancy Davolio",
      "opis": "Premier Buy",
      "cijena": 1740,
      "tipProizvoda": 2,
      "tipProizvodaOpis": "Opis proizvoda 2",
      "auto": {
        "id": 1,
        "boja": "Crna",
        "godiste": new Date(),
        "grijaciSjedista": true,
        "kilometri": 120000,
        "klima": true,
        "marka": "Audi",
        "motor": "Dizel",
        "opis": "Auto je jako dobar",
        "podizaciStakala": true,
        "registrovan": true,
        "servoVolan": true,
        "siber": true,
        "status": 1,
        "xenoni": true,
        "zastita": true
      }
    },
    {
      "id": 12,
      "adresa": "Nancy Davolio",
      "opis": "Premier Buy",
      "cijena": 1740,
      "tipProizvoda": 2,
      "tipProizvodaOpis": "Opis proizvoda 2",
      "auto": {
        "id": 1,
        "boja": "Crna",
        "godiste": new Date(),
        "grijaciSjedista": true,
        "kilometri": 120000,
        "klima": true,
        "marka": "Audi",
        "motor": "Dizel",
        "opis": "Auto je jako dobar",
        "podizaciStakala": true,
        "registrovan": true,
        "servoVolan": true,
        "siber": true,
        "status": 1,
        "xenoni": true,
        "zastita": true
      }
    },
    {
      "id": 13,
      "adresa": "Nancy Davolio",
      "opis": "Premier Buy",
      "cijena": 1740,
      "tipProizvoda": 2,
      "tipProizvodaOpis": "Opis proizvoda 2",
      "auto": {
        "id": 1,
        "boja": "Crna",
        "godiste": new Date(),
        "grijaciSjedista": true,
        "kilometri": 120000,
        "klima": true,
        "marka": "Audi",
        "motor": "Dizel",
        "opis": "Auto je jako dobar",
        "podizaciStakala": true,
        "registrovan": true,
        "servoVolan": true,
        "siber": true,
        "status": 1,
        "xenoni": true,
        "zastita": true
      }
    },
    {
      "id": 14,
        "adresa": "Nancy Davolio",
        "opis": "Premier Buy",
        "cijena": 1740,
        "tipProizvoda": 2,
        "tipProizvodaOpis": "Opis proizvoda 2",
        "auto": {
          "id": 1,
          "boja": "Crna",
          "godiste": new Date(),
          "grijaciSjedista": true,
          "kilometri": 120000,
          "klima": true,
          "marka": "Audi",
          "motor": "Dizel",
          "opis": "Auto je jako dobar",
          "podizaciStakala": true,
          "registrovan": true,
          "servoVolan": true,
          "siber": true,
          "status": 1,
          "xenoni": true,
          "zastita": true
        }
    },
    {
      "id": 15,
      "adresa": "Nancy Davolio",
      "opis": "Premier Buy",
      "cijena": 1740,
      "tipProizvoda": 2,
      "tipProizvodaOpis": "Opis proizvoda 2",
      "auto": {
        "id": 1,
        "boja": "Crna",
        "godiste": new Date(),
        "grijaciSjedista": true,
        "kilometri": 120000,
        "klima": true,
        "marka": "Audi",
        "motor": "Dizel",
        "opis": "Auto je jako dobar",
        "podizaciStakala": true,
        "registrovan": true,
        "servoVolan": true,
        "siber": true,
        "status": 1,
        "xenoni": true,
        "zastita": true
      }
    }];
return products;
      // return this.generalService.get('/api/sviproizvodi').pipe(
      //     map((response => response as Product[]),
      //     catchError((error =>  error => console.log("")))
      //   ));
      }

getProductById(_id: number): Product {

  var product = {
    "id": 1,  
    "adresa": "Nancy Davolio",
    "opis": "Premier Buy",
    "cijena": 1740,
    "tipProizvoda": 2,
    "tipProizvodaOpis": "Opis proizvoda 2",
    "auto": {
      "id": 1,
      "boja": "Crna",
      "cijena": 43563,
      "godiste": new Date(),
      "grijeaciSjedista": true,
      "kilometri": 120000,
      "klima": true,
      "marka": "Audi",
      "motor": "Dizel",
      "opis": "Auto je jako dobar",
      "podizaciStakala": true,
      "registrovan": true,
      "servoVolan": true,
      "siber": true,
      "status": 1,
      "xenoni": true,
      "zastita": true
    }
};

return product;
    // return this.generalService.get('/api/products/' + _id).pipe(
    //     map((response => response as Product),
    //     catchError((error =>  error => console.log("")))
    //   ));
}

createProduct(product: Product): Observable<Product> {
    return this.generalService.post('products/saveproduct', product)
    .pipe(map((response => response as Product),
    catchError((error => error => console.log("")))
    ));
}

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
