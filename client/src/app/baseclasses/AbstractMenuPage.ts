import {OnInit} from "@angular/core";
import {MenuItem} from "./MenuItem";

export abstract class AbstractMenuPage implements OnInit {
  public MainMenuItems: Array<MenuItem> = [];

  public constructor() {
  }

  public abstract initializeMenuItems();

  public ngOnInit() {
    this.initializeMenuItems();
  }
}
