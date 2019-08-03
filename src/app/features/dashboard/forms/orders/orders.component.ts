import { Component, OnInit } from '@angular/core';
import { ProizvodiServisService } from '@app/core/services/proizvodi-servis.service';
import { Product } from '@app/core/models/domains';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnInit {

  proizvodi: Product[];
  constructor(private proizvodService: ProizvodiServisService) { }

  ngOnInit() {
    this.dohvatiProizvodeZaKorisnika();
  }

  editujProizvod(proizvodId: any){
    console.log("Proizvod: ", proizvodId);
  }

  okoncajOglas(proizvod: any){
    console.log("Proizvod: ", proizvod);
    this.proizvodService.okoncajProizvod(proizvod.id).subscribe(data => {
      this.proizvodi = data;
    },
    error => {
      console.log("Greska prilikom brisanja!");
    });
  }

  obrisiProizvod(proizvod: Product){
    console.log("Proizvod: ", proizvod);
    this.proizvodService.deleteProduct(proizvod.id).subscribe(data => {
      var index = this.proizvodi.indexOf(proizvod);

      this.proizvodi.splice(index, 1);
    },
    error => {
      console.log("Greska prilikom brisanja!");
    });
  }

  dohvatiProizvodeZaKorisnika(){
    this.proizvodService.getAllProductForUser().subscribe(data => {
      this.proizvodi = data;
      console.log("RESPONSE", data);
      console.log("Proizvodi: ", this.proizvodi);
    },
    error => {
      console.log("Greska prilikom dohvata proizvoda!");
    });
  }

}
