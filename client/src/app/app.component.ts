import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', ]
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor() {}

  ngOnInit() {
  }
}
