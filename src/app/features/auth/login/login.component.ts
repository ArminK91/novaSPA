import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import { AuthService } from '@app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) { }

 

  // login(event){
  //   event.preventDefault();
  //   this.router.navigate(['/dashboard'])
  // }


  model: any = {};
  loading = false;
  returnUrl: string;

 
  ngOnInit() {
      // reset login status
      this.authService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard/analytics';
  }

  login() {
      this.loading = true;
      this.authService.login(this.model.username, this.model.password)
          .subscribe(
              data => {
                  this.router.navigate([this.returnUrl]);
              },
              error => {
                  //this.alertService.error(error._body);
                  this.loading = false;
              });
  }
  onLoggedin() {
      localStorage.setItem('isLoggedin', 'true');
  }

}
