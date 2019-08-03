import { Component, OnInit, Input } from '@angular/core';
import { Poruka } from '@app/core/models/domains';
import { ProizvodiServisService } from '@app/core/services/proizvodi-servis.service';

@Component({
  selector: 'sa-pitanja',
  templateUrl: './pitanja.component.html',
  styleUrls: ['./pitanja.component.css']
})
export class PitanjaComponent implements OnInit {
  @Input() proizvodId: number;
  poruke: Poruka[];
  poruka = new Poruka();
  constructor(private proizvodService: ProizvodiServisService) { }

  ngOnInit() {
    console.log("PROIZVOD ID: ", this.proizvodId);
    if (this.proizvodId > 0)
      this.dohvatiPorukeZaProizvod(this.proizvodId);
  }

  snimiPitanje(){
    this.poruka.proizvodId = this.proizvodId;
    console.log("Poruka prije spasavanja: ", this.poruka);
    this.proizvodService.snimiPorukuProizvod(this.poruka).subscribe(data => {
      this.poruke = data;
      this.poruka = {};
    },
    error => {
      console.log("Greska prilikom snimanja!");
    });
  }

  dohvatiPorukeZaProizvod(proizvodId: number){
    this.proizvodService.dohvatiPorukePorizvod(proizvodId).subscribe(data => {
      this.poruke = data;
      console.log("Dohvacenne poruke: ", this.poruke);
    },
    error => {
      console.log("Greska!");
    });
  }

}
