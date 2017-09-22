

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {Router} from "@angular/router";
import {ApiConnectionService} from "./ApiConnectionService";

@Injectable()
export class AuthenticationService {
  private authenticated: BehaviorSubject<boolean> = new BehaviorSubject(null);
  constructor(private http: Http, private router: Router, private apiService: ApiConnectionService) {}

  public isAuthenticated(): Observable<boolean> {
    this.checkAuthentication();
    return Observable.from(this.authenticated);
  }

  private changeAuthenticatedStatus(status: boolean) {
    this.authenticated.next(status);
  }

  private checkAuthentication() {
    this.changeAuthenticatedStatus(this.authenticated.getValue());
  }

  public login (user, pass): boolean {
    let testUser = "sasha";
    let testPass = "123";
    if(testUser === user && testPass === pass) {
      this.changeAuthenticatedStatus(true);
      return true;
    }
    return false;
  }

  public signup (email: string, pass: string): Observable<Response> {
    return this.apiService.makePostApiRequest("signup", {
      "email": email,
      "password": pass
    });
  }

  public logout(): boolean {
    this.router.navigateByUrl("admin-panel/login");
    return true;
  }
}
