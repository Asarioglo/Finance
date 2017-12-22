import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from "../baseclasses/AuthenticationService";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
  selector: 'app-admin-console',
  templateUrl: './admin-console.component.html',
  styleUrls: ['./admin-console.component.css']
})
export class AdminConsoleComponent implements OnInit {
  private authenticated: boolean = false;
  constructor(private authentication: AuthenticationService) {}

  ngOnInit() {
    this.authentication.isAuthenticated().subscribe((auth: boolean) => {
      if(auth === null) {
        return this;
      }
      if(!auth) {
        this.authenticated = false;
        this.authentication.logout();
      } else {
        this.authenticated = true;
      }

    });
  }

}
