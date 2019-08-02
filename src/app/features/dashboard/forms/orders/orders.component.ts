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
