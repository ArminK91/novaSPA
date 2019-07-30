import { Injectable } from '@angular/core';
import { GeneralServiceService } from './general-service.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HelperServiceService {

  constructor(private generalService: GeneralServiceService) { }

  dohvatiTipoveProizvoda() {
    return this.generalService.get('general/tipovi')
      .pipe(map((response => response as any),
      catchError((error => error => console.log("")))
      ));
  }

}
