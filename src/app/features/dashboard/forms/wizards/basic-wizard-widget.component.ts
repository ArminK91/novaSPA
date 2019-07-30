import {
  Component, OnInit, DoCheck,
} from '@angular/core';

import { trigger,
  state,
  style,
  transition,
  animate} from '@angular/animations'
import { Product, Sifarnik, ISlika, Auto } from '@app/core/models/domains';
import { ProizvodiServisService } from '@app/core/services/proizvodi-servis.service';
import { HelperServiceService } from '@app/core/services/helper-service.service';

@Component({
  selector: 'basic-wizard-widget',
  templateUrl: './basic-wizard-widget.component.html',
  animations: [
    trigger('changePane', [
      state('out', style({
        height: 0,
      })),
      state('in', style({
        height: '*',
      })),
      transition('out => in', animate('250ms ease-out')),
      transition('in => out', animate('250ms 300ms ease-in'))
    ])
  ]
})
export class BasicWizardWidgetComponent implements OnInit, DoCheck {

  proizvod = new Product();
  tipovi = Array<Sifarnik>();
  produktAuto: boolean = false;
  productId: number;
  public response: {dbPath: ''};
  slika: ISlika = {};
  slike: Array<ISlika> = [];
  auto = new Auto();

  constructor(private produktServis: ProizvodiServisService, private helperService: HelperServiceService) {
  }

  ngOnInit() {
    this.dohvatiSifarnik();
  }

  public createImgPath = (serverPath: string) => {
    return `https://localhost:54058/${serverPath}`;
  }
  
  // this.slika = {
  // naziv: this.name,
  // imgPath: this.response.dbPath
  // }

  public uploadFinished = (event) => {
    this.response = event;

  
    console.log("Response Upload finished: ", this.response);
  }
  onCreate() {
    const tempSlika = {
      naziv: "slika1",
      imgPath: this.response.dbPath
    };

    console.log("Slika dodavanje: ", tempSlika);

    this.slike.push(tempSlika);
  }
  onPromjenaTipa() {
    if(this.proizvod.tipProizvoda == 1) {
      this.produktAuto = true;
    }
  }

  dohvatiSifarnik() {
    this.helperService.dohvatiTipoveProizvoda().subscribe(data => {
      console.log("TIpovi response: ", data);
      this.tipovi = data;
    },
    error => {
      console.log("Greska kod povlacenja tipova proizvoda: ", error);
    });
  }

  public steps = [
    {
      key: 'step1',
      title: 'Osnovne informacije',
      valid: false,
      checked: false,
      submitted: false,
    },
    {
      key: 'step2',
      title: 'Opis proizvoda',
      valid: false,
      checked: false,
      submitted: false,
    },
    {
      key: 'step3',
      title: 'Dodavanje slika',
      valid: true,
      checked: false,
      submitted: false,
    },
    {
      key: 'step4',
      title: 'Dodaj proizvod',
      valid: true,
      checked: false,
      submitted: false,
    },
  ];

  public activeStep = this.steps[0];

  setActiveStep(steo) {
    this.activeStep = steo
  }

  prevStep() {
    let idx = this.steps.indexOf(this.activeStep);
    if (idx > 0) {
      this.activeStep = this.steps[idx - 1]
    }
  }

  nextStep() {
    this.activeStep.submitted = true;
    // if(!this.activeStep.valid){
    //   return;
    // }
    console.log("KORAK: ", this.activeStep.key);
    console.log("KORAK: ", this.proizvod);


    if (this.activeStep.key == 'step1' && this.proizvod.id == 0) {
      //dodaj proizvod u bazu
      this.snimiProizvod();
    }
    if (this.activeStep.key == 'step2' && this.auto.id == 0) {
      //dodaj proizvod u bazu
      this.snimiProizvodAuto();
      //this.snimiProizvod();
    }
    this.activeStep.checked = true;
    if (this.steps.every(it=>(it.valid && it.checked))) {
      
      this.onWizardComplete(this.proizvod)
    } else {
      let idx = this.steps.indexOf(this.activeStep);
      this.activeStep = null;
      while (!this.activeStep) {
        idx = idx == this.steps.length - 1 ? 0 : idx + 1;
        if (!this.steps[idx].valid || !this.steps[idx].checked ) {
          this.activeStep = this.steps[idx]
        }
      }
    }
  }

  snimiProizvod() {
    console.log("Snimanje proizvoda: ", this.proizvod);
    //this.proizvod.auto = this.auto;
    //console.log("Proizvod zajedno sa autom: ", this.proizvod);
    this.produktServis.createProduct(this.proizvod).subscribe(data => {
      console.log("Response proizvod: ", data);
      this.proizvod = data;
    },
    error => {
      console.log("Greska.");
    });
  }

  azurirajProizvod(){
    console.log("Azuriranje proizvoda> ", this.proizvod);
    this.produktServis.updateProduct(this.proizvod).subscribe(data => {
      this.proizvod = data;
    },
    error => {
      console.log("Greska");
    }); 
  }

  snimiProizvodAuto(){
    console.log("Snimanje  auta proizvoda> ", this.auto);
    this.auto.proizvodId = this.proizvod.id;
    this.produktServis.snimiProizvodAuto(this.auto).subscribe(data => {
      this.auto = data;
    },
    error => {

    });
  }

  azurirajProizvodAuto(){
    console.log("Azuriranje autp proizvoda");
    this.produktServis.azurirajProizvodAuto(this.auto).subscribe(data => {
      this.auto = data;
    },
    error => {

    });
  }

  onWizardComplete(data) {
    console.log('basic wizard complete', data)
  }


  private lastModel;

  // custom change detection
  ngDoCheck() {
    if (!this.lastModel) {
      // backup model to compare further with
      this.lastModel = Object.assign({}, this.proizvod)
    } else {
      if (Object.keys(this.proizvod).some(it=>this.proizvod[it] != this.lastModel[it])) {
        // change detected
        this.steps.find(it=>it.key == 'step1').valid = !!(this.proizvod.adresa && this.proizvod.tipProizvoda && this.proizvod.opis);
        this.steps.find(it=>it.key == 'step2').valid = !!(this.proizvod.cijena);
        this.lastModel = Object.assign({}, this.proizvod)
      }
    }
  }

}
