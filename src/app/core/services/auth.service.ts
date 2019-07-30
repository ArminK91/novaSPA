import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { Response } from '@angular/http';
import { User } from '../models/user';
import { AppConfig, UserData } from '../models/domains';


@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;
  config: AppConfig;
  constructor(private http: HttpClient) {

  }

  

  login(username: string, password: string) {
    //console.log("Login ruta:", this.config.apiUrl );
    console.log("Podaci za autentikaciju: " + username + " passeword: " + password);
    return this.http.post('http://localhost:54058/api/identity/authenticate', { username: username, password: password })
        .pipe(map((response: any) => {
            // login successful if there's a jwt token in the response
            console.log("Dobio neki response: ",response);
            console.log("DAJ JSON OVOG USERA: ", JSON.stringify(response));
           //let user = response.json();
           const user = response;
            if (response) {
                console.log("Postavi token!");
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                
                localStorage.setItem('currentUser', JSON.stringify(response));
                var token = JSON.stringify(response);
                console.log("Moj token: ", user);
                
                localStorage.setItem('token', user.token);
                
            }
        }));
}



logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
}

  // login(): Observable<boolean> {
  //   return of(true)
  //     .pipe(
  //       delay(1000),
  //       tap(val => this.isLoggedIn = true)
  //     )

  // }

  // logout(): void {
  //   this.isLoggedIn = false;
  // }


getAll() {
    return this.http.get<User[]>(`${this.config.apiUrl}/api/identity`);
}

getById(id: string) {
  return this.http.get(`${this.config.apiUrl}/api/identity/${id}`);
}

create(user: User) {
  console.log("Podaci korisnika: ", user);
  return this.http.post(`http://localhost:54058/api/identity/register`, user);
}

update(user: User) {
  return this.http.put(`${this.config.apiUrl}/api/identity/${user.id}`, user);
}

delete(id: string) {
  return this.http.delete(`${this.config.apiUrl}/users/${id}`);
}




}




