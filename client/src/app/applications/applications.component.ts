import { Component, OnInit } from '@angular/core';
import {AbstractMenuPage} from "../baseclasses/AbstractMenuPage";
import {MenuItem} from "../baseclasses/MenuItem";
import {MainPageComponent} from "../main-page/main-page.component";

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent extends MainPageComponent {
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
