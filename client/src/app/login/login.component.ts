import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../baseclasses/AuthenticationService";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string = "";
  public pass: string = "";

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  public attemptLogin(email: string, pass: string) {
    if(this.authService.login(email, pass)) {
      this.router.navigateByUrl("admin-panel/console");
    } else {
      this.router.navigateByUrl("admin-panel/login");
    };
  }

}
