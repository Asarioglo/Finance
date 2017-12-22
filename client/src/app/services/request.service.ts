import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import { UrlStorage } from "./urls";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class RequestService {

  private host = 'http://localhost';
  private port = '3000';

  constructor(private http: Http, private urlProvider: UrlStorage) {};

  getFamilyMembers(): Observable<any> {
    return this.http.get(`${this.host}:${this.port}${this.urlProvider.getUrl('familyList')}`).map((res: Response) => res.json());
  }
}
