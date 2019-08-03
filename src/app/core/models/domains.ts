import { NumberValueAccessor } from "@angular/forms/src/directives";

//import { Settings } from "http2";

export class AppConfig {
    public readonly apiUrl = 'http://localhost:54058';
  };

  export class UserData{
    id?:number;
    firstName?: string;
    lastName?: string;
    username?: string;
    token?: string;
  }

  export enum StatusSloga{
    NEAKTIVAN = 0,
    AKTIVAN = 1
  }

  export enum StatusProizvoda{
    AKTIVAN = 1,
    OKONCAN = 2
  }

  export interface Ipr {
    id?:number;
    tipProizvoda?: string;
    tipProizvodaOpis?:string;
    cijena?:number;
    opis?:string;
    adresa?:string;
  };

  export interface IAuto {
    id?:number;
    boja?:string;
    marka?:string;
    opis?:string;
    kilometri?:number;
    godiste?:Date;
    motor?: string;
    podizaciStakala?:boolean;
    servoVolan?:boolean;
    klima?:boolean;
    zastita?:boolean;
    xenoni?:boolean;
    grijeaciSjedista?:boolean;
    siber?:boolean;
    registrovan?:boolean;
    cijena?:number;
    status?:number;
  };

  export class Product {
    id?:number;
    tipProizvoda?: number;
    naziv?:string;
    userId?:number;
    automobilId?:number;
    datumObjave?:Date;
    tipProizvodaOpis?:string;
    cijena?:number;
    opis?:string;
    adresa?:string;
    auto?: Auto;
    slike?: Slika[];
    status?: StatusSloga;
    statusProizvoda?: StatusProizvoda;
    statusSlogaOpis?: string;
    statusProizvodaOpis?: string;
    user?: UserVm;
    poruke?: Poruka[];
    constructor() {
      this.id = 0;
      this.slike = new Array<Slika>();
      this.poruke = new Array<Poruka>();
    }
  }

  export class Poruka{
    id?:number;
    tekst?:string;
    datumObjave?: Date;
    proizvodId?:number;
    applicationUserID?:number;
    status?: number;
    constructor(){
      this.id = 0;
      this.tekst = "";
      this.datumObjave = null;
      this.proizvodId = 0;
      this.applicationUserID = 0;
      this.status = 0;
    }
  }

  export class ProductWrapper{
    data?: Product[];
  }

  export class UserVm{
    id?: number;
    userName?:string;
  }

  export class Slika{
    id?:number;
    url?:string;
    datumDodavanja?: Date;
    opis?: string;
    glavna?: boolean;
  }

  export class Auto {
    id?:number;
    boja?:string;
    marka?:string;
    opis?:string;
    kilometri?:number;
    godiste?:string;
    motor?: string;
    podizaciStakala?:boolean;
    servoVolan?:boolean;
    klima?:boolean;
    zastita?:boolean;
    xenoni?:boolean;
    grijaciSjedista?:boolean;
    siber?:boolean;
    registrovan?:boolean;
    status?:number;
    proizvodId?:number;
    constructor(){
      this.id = 0;
      this.boja = "",
      this.godiste = "",
      this.grijaciSjedista = false,
      this.kilometri = 0,
      this.klima = false,
      this.marka = "",
      this.motor = "",
      this.opis = "",
      this.podizaciStakala = false,
      this.registrovan = false,
      this.servoVolan = false,
      this.siber = false,
      this.status = 1,
      this.xenoni = false,
      this.zastita = false
      this.proizvodId = 0;
    }
  }

  export enum TipSifarnika {
    TIP_PROIZVODA = 1
  }

  export class Sifarnik {
    id?: number;
    extra1?: string;
    extra2?: string; 
    extra3?: string;
    tipSif?: TipSifarnika;
    naziv?: string;
    roditeljId?: number;
    vrijednost?: number; 
  }

  export interface ISlika {
    id?: number;
    naziv?: string;
    imgPath?: string;
  }