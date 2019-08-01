import { Component, OnInit } from '@angular/core';
import { ProizvodiServisService } from '@app/core/services/proizvodi-servis.service';
import { HelperServiceService } from '@app/core/services/helper-service.service';
import { Product } from '@app/core/models/domains';
@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
})
export class ProductsViewComponent implements OnInit {
  proizvodi: Product[];
  
  constructor(private proizvodService: ProizvodiServisService) { }


  dohvatiDostupneProizvode() {
    //this.proizvodi = this.proizvodService.dohvatiSveDostupneProizvode();
    this.proizvodService.dohvatiSveDostupneProizvode().subscribe(data => {
      this.proizvodi = data;
      console.log("Proizvodi iz baze: ", this.proizvodi);
    },
      error => {
        console.log("Greska!");
      }
    )
  }

  ngOnInit() {
    this.dohvatiDostupneProizvode();
  }

}
