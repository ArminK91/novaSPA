import { Component, OnInit } from "@angular/core";
import { routerTransition } from "@app/shared/utils/animations";
import { User } from "@app/core/models/user";
import { UserService } from "@app/core/services/user.service";

@Component({
  selector: "app-main-layout",
  templateUrl: "./main-layout.component.html",
  styles: [],
  animations: [routerTransition]
})
export class MainLayoutComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

 
    ngOnInit() {
        this.loadAllUsers();
    }
 
    deleteUser(_id: string) {
        this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
    }
 
    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

  getState(outlet) {
    if(!outlet.activatedRoute) return;
    let ss = outlet.activatedRoute.snapshot;

    // return unique string that is used as state identifier in router animation
    return (
      outlet.activatedRouteData.state ||
      (ss.url.length
        ? ss.url[0].path
        : ss.parent.url.length
          ? ss.parent.url[0].path
          : null)
    );
  }
}
