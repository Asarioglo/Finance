import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public alerts: Array<any> = [];

  public deploy() {
    this.updateAlerts("info", "Sending a request to pull, build, and deploy the code to asarioglo.com");
    // TODO: this address must become global
    let body = this.http.get("localhost:3000/api/control/sasha_only/remote/deploy");
    // let body = this.http.get("http://185.179.190.61/api/control/sasha_only/remote/deploy");
    body.subscribe(
      data => {
        this.updateAlerts("success", "Deploy sucessful, refresh the page to apply the changes");
      },
      err => {
        this.updateAlerts("danger", "Request failed, check your console");
        console.log(err);
      }
    )
  }

  private updateAlerts(type, message) {
    this.alerts = [];
    this.alerts.push({
      type: type,
      text: message
    });
  }

  ngOnInit() {
  }

}
