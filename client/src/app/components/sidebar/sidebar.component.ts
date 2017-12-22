import {Component, Input, OnInit} from '@angular/core';
import {SidebarLink} from "../baseclasses/SidebarLink";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() links: Array<SidebarLink>;

  constructor() { }

  ngOnInit() {
  }

}
