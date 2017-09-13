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
    this.MainMenuItems.push( new MenuItem("Resume", "/resume","../../assets/resume/img/pen.jpg", "#fff", "#791919"));
    this.MainMenuItems.push(new MenuItem("Applications","/applications", "../../assets/resume/img/programming.jpg", "#c7d2d8"));
    // this.MainMenuItems.push(new MenuItem( "Photography", "/applications", "../../assets/resume/img/old_camera.jpg", "#e4f2fb"));
    this.MainMenuItems.push(new MenuItem( "Photography", "/applications", "../../assets/resume/img/old_camera_1.jpg", "#fff"));
  }

  public getUrlString(url) {
    return "url(" + url + ")";
  }
}
