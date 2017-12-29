import { Component, OnInit } from '@angular/core';
import {MenuItem} from "../baseclasses/MenuItem";
import {AlexandrSarioglo} from "../alexandr-sarioglo/alexandr-sarioglo.component";

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent extends AlexandrSarioglo {
  private name: string;

  constructor() {
    super();
  }

  public getItemHeight (): string {
    // return (Math.floor(100 / this.MainMenuItems.length * 100) / 100) + '%';
    return '30%';
  }

  public initializeMenuItems() {
    this.MainMenuItems.push( new MenuItem("Financial", "/applications/financial","assets/resume/img/pen.jpg", "#fff", "#791919"));
  }

  public getUrlString(url) {
    return "url(" + url + ")";
  }
}
