import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProizvodiServisService } from '@app/core/services/proizvodi-servis.service';
import { Product } from '@app/core/models/domains';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  @Input() proizvodId: number;
  proizvod: Product = {}
  id: number;
  private sub: any;
  isLoaded: boolean;
  constructor(private proizvodService: ProizvodiServisService, private route: ActivatedRoute) { }

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


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
    console.log("IDDD: ", this.id);
    
    this.dohvatiDetaljeProizvoda(this.id);
  }

  dohvatiDetaljeProizvoda(proizvodId: number){
    
    this.proizvodService.getProductById(proizvodId).subscribe(data => {
      this.proizvod = data;
      this.isLoaded = true;
      console.log("PROIZVOD: ", this.proizvod);
    },
    erro => {
      console.log("Greska.");
    })
  }

  // dohvatiSlikeZaProizvod(proizvodId: number){
  //   this.proizvodService.da
  // }


}
