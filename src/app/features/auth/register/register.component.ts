import { Component, OnInit, TemplateRef } from '@angular/core';
import {Router} from "@angular/router";


import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AuthService } from '@app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
 

  bsModalRef: BsModalRef;
  public termsAgreed = false
  loading: boolean;
  model: any = {};
  constructor(
    private router: Router,  
    private modalService: BsModalService,
    private authService: AuthService) {}
 
   ngOnInit() {}

  // register(event){
  //   event.preventDefault();
  //   this.router.navigate(['/dashboard'])
  // }

  openModal(event, template: TemplateRef<any>) {
    event.preventDefault();
    this.bsModalRef = this.modalService.show(template);
  }

  onTermsAgree(){
    this.termsAgreed = true
    this.bsModalRef.hide()
  }

  onTermsClose(){
    this.bsModalRef.hide()
  }

  register() {
    this.loading = true;
    this.authService.create(this.model)
        .subscribe(
            data => {
                this.router.navigate(['/login']);
            },
            error => {
                this.loading = false;
            });
}


}
