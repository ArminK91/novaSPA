import { Component, OnInit } from '@angular/core';
import { ProizvodiServisService } from '@app/core/services/proizvodi-servis.service';
import { Product } from '@app/core/models/domains';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {
  proizvodId: number;
  proizvod: Product = {}


  product = {
    slides: [
      {
        src: 'assets/img/demo/e-comm/detail-1.png',
      },
      {
        src: 'assets/img/demo/e-comm/detail-2.png'
      },
      {
        src: 'assets/img/demo/e-comm/detail-3.png'
      }
    ]
  }



  constructor(private proizvodService: ProizvodiServisService) { }

  ngOnInit() {
    this.dohvatiDetaljeProizvoda();
  }

  dohvatiDetaljeProizvoda(){
    this.proizvod = this.proizvodService.getProductById(this.proizvodId);
    // this.proizvodService.getProductById(this.proizvodId).subscribe(data => {
    //   this.proizvod = data;
    // },
    // erro => {
    //   console.log("Greska.");
    // })
  }


}
