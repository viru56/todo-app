import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { environment } from "src/environments/environment";
import { tap } from "rxjs/operators";
import { CookieService } from "ngx-cookie-service";
import { Iuser } from "../models";
import { Router } from "@angular/router";
import { Subject } from 'rxjs';
@Injectable({
  providedIn: "root"
})
export class AuthService {
  private userSubject = new Subject<Iuser>();
  public user = this.userSubject.asObservable();
  constructor(
    private apiService: ApiService,
    private cookieService: CookieService,
    private router: Router
  ) {}
  addNewUser(body: {
    fullName: string;
    email: string;
    role: string;
  }): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.apiService
        .post(environment.user_url, body)
        .toPromise()
        .then(item => {
          resolve(item);
        })
        .catch(err => reject(err));
    });
  }
  login(body: { email: string; password: string }): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiService
        .post(`${environment.user_url}/login`, body)
        .pipe(
          tap(
            data => {
             this.updateUser(data.user);
              this.cookieService.set("authorization", data.token);
            }
          )
        )
        .toPromise()
        .then(resolve)
        .catch(reject);
    });
  }
  getUserDetails(): Promise<Iuser> {
    return new Promise((resolve, reject) => {
      this.apiService
        .get(`${environment.user_url}`)
        .toPromise()
        .then(user => {
          if (user) {
            resolve(user);
          } else {
            this.logout();
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  logout() {
    this.cookieService.deleteAll();
    this.router.navigateByUrl("/login");
  }
  updateUser(user:Iuser){
    this.userSubject.next(user);
  }
}
