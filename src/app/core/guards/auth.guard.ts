import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import * as fromAuth from '../store/auth';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<fromAuth.AuthState>, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (localStorage.getItem('currentUser')) {
          // logged in so return true
          return true;
      }

      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
  }

  // canActivate(): Observable<boolean> {
    
  //   return this.store.pipe(
  //     select(fromAuth.getLoggedIn),
  //     map(authed => {
  //       if (!authed) {
  //         this.store.dispatch(new fromAuth.LoginRedirect('/dashboard'));
  //         return false;
  //       }

  //       return true;
  //     }),
  //     take(1)
  //   );
  // }
}
