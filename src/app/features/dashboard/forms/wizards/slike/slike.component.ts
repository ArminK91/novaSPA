import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Slika, Product } from '@app/core/models/domains';

import { environment } from '@env/environment';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ProizvodiServisService } from '@app/core/services/proizvodi-servis.service';


@Component({
  selector: 'sa-slike',
  templateUrl: './slike.component.html',
  styleUrls: ['./slike.component.css']
})
export class SlikeComponent implements OnInit, OnChanges {
 

  @Input() slike: Slika[];
  @Input() proizvod: Product;
  @Output() uploadDone = new EventEmitter();

  proizvodId: number;
  public uploader:FileUploader;
   hasBaseDropZoneOver:boolean = false;
   hasAnotherDropZoneOver:boolean = false;
  
  baseUrl = environment.apiUrl;

  constructor(private servis: ProizvodiServisService) { }

  ngOnInit() {
    this.initializeUploader();
  }

   fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  postaviSlikuZaGlavnu(slika: Slika){
    this.servis.postaviGlavnuSliku(this.proizvodId, slika.id).subscribe((data) => {
      this.slike = data;
      console.log("Uspjesno postavljeno.");
    },
    error => {

    })
  }

  initializeUploader(){
    console.log("Proizvod dolazni: ", this.proizvod);
    this.uploader = new FileUploader({
      url: this.baseUrl + 'proizvodislike/dodajslikuzaproizvod/' + this.proizvodId,
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });

    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false;};

    this.uploader.onSuccessItem = (item, response,status, headers) => {

      console.log("Response: ", response);
      console.log("Arraz: ", this.slike);

      if(response){
        const res: Slika = JSON.parse(response);

        console.log("RES: ", res);

        const slika = {
          id: res.id,
          url: res.url,
          datumDodavanja: res.datumDodavanja,
          opis: res.opis,
          glavna: res.glavna
        };

        console.log("Slika new object: ", slika);

        this.slike.push(slika);
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const prop in changes) {
      if (changes.hasOwnProperty(prop)) {
        if (prop == "proizvod") {
          console.log("Kolateral u changes: ", this.proizvod);
          if (this.proizvod != undefined) {
          if (this.proizvod.id > 0) {
            this.proizvodId = this.proizvod.id;
            this.initializeUploader();
          }
          if(this.proizvod.slike == null){
            this.slike = [];
          }
        }
      }
    }
  }
  }
}
