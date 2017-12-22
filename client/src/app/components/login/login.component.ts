import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../baseclasses/AuthenticationService";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PasswordValidator} from "../baseclasses/PasswordValidator";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string = "";
  public pass: string = "";
  private form: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    fb: FormBuilder
  ) {
    this.form = fb.group({
      password: [""],
      confirmPassword: ["", Validators.required],
      email: ["", Validators.required]
    }, {
      validator: PasswordValidator.validate
    });
  }

  ngOnInit() {
  }

  public attemptLogin(email: string, pass: string) {
    if(this.authService.login(email, pass)) {
      this.router.navigateByUrl("admin-panel/console");
    } else {
      this.router.navigateByUrl("admin-panel/login");
    }
  }

  public onSubmit() {
    this.authService.signup(this.form.get("email").value, this.form.get("password").value)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (err) => {
          console.log(err);
        }
      );
  }

}
