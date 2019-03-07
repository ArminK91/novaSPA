import { Injectable } from "@angular/core";

import { BehaviorSubject } from "rxjs";
import { JsonApiService } from "@app/core/services/json-api.service";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { AppConfig } from "@app/app.config";



const defaultUser = {
  username: "Guest"
}
@Injectable()
export class UserService {
  public user$ = new BehaviorSubject({...defaultUser});
  config: AppConfig;

  constructor(private jsonApiService: JsonApiService, private http: HttpClient) {
    this.jsonApiService.fetch("/user/login-info.json").subscribe(this.user$)
  }

  public logout(){
    this.user$.next({...defaultUser})
  }


  getAll() {
    return this.http.get<User[]>(`http://localhost:54058/api/identity`);
}

getById(id: string) {
  return this.http.get(`http://localhost:54058/api/identity/${id}`);
}

create(user: User) {
  return this.http.post(`http://localhost:54058/api/identity/register`, user);
}

update(user: User) {
  return this.http.put(`http://localhost:54058/api/identity/${user.id}`, user);
}

delete(id: string) {
  return this.http.delete(`${this.config.apiUrl}/users/${id}`);
}

}
