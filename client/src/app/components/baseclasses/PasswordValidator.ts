import {AbstractControl} from "@angular/forms";
import {passBoolean} from "protractor/built/util";

export class PasswordValidator {
  static validate(ac: AbstractControl) {
    let pwd = ac.get("password").value;
    let cpwd = ac.get("confirmPassword").value;
    if(pwd != cpwd) {
      ac.get("confirmPassword").setErrors({MatchPassword: true});
    } else {
      return null;
    }
  }
}
