

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {Router} from "@angular/router";

@Injectable()
export class AuthenticationService {
  private authenticated: BehaviorSubject<boolean> = new BehaviorSubject(null);
  constructor(private http: Http, private router: Router) {}

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

  public logout(): boolean {
    this.router.navigateByUrl("admin-panel/login");
    return true;
  }
}
