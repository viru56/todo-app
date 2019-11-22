import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { AuthService, Iuser } from "./shared";
import { Subscribable, Subscriber } from 'rxjs';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(
    private cookieService: CookieService,
    private router: Router,
    private authService: AuthService
  ) {}
  title = "TODO APP";
  user: Iuser;
  userObserver:any;
  ngOnInit(): void {
    this.userSubscribe();
    if (this.cookieService.check("authorization")) {
      this.authService
        .getUserDetails()
        .then(user => (this.user = user))
        .catch(err => {
          console.log(err);
          this.logout();
        });
      this.router.navigateByUrl("task");
    } else {
      this.router.navigateByUrl("login");
    }
  }
  logout() {
    this.user = null;
    this.authService.logout();
  }
  userSubscribe() {
   this.authService.user.subscribe(data => {
      this.user = data;
    })
  }
}
