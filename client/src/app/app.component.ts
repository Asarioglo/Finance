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
  private name: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    let body = this.http.get("http://localhost:3000/api/name",{});
    body.subscribe((res: any) => {
      this.name = res.name;
    })
  }
}
