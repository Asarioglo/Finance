import { Component, OnInit } from '@angular/core';
import {AbstractMenuPage} from "../baseclasses/AbstractMenuPage";
import {MenuItem} from "../baseclasses/MenuItem";
import {SidebarLink} from "../baseclasses/SidebarLink";

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit {
  public sidebarLinks: Array<SidebarLink> = [];

  constructor() {
    this.initializeSidebar();
  }

  private initializeSidebar() {
    this.sidebarLinks.push(new SidebarLink("Basic Valuation", "basic-valuation"));
  }

  ngOnInit() {}
}
