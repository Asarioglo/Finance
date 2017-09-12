import { Component, OnInit } from '@angular/core';
import {AbstractMenuPage} from "../baseclasses/AbstractMenuPage";
import {MenuItem} from "../baseclasses/MenuItem";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent extends AbstractMenuPage {

  constructor() {
    super();
  }

  public getItemHeight (): string {
    return (Math.floor(100 / this.MainMenuItems.length * 100) / 100) + '%';
  }

  public initializeMenuItems() {
    this.MainMenuItems.push( new MenuItem("Resume", "/resume",""));
    this.MainMenuItems.push(new MenuItem("Applications","/applications",""));
    this.MainMenuItems.push(new MenuItem( "Photography", "/applications", ""));
  }
}
