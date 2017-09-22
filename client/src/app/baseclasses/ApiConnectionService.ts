import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {HttpHeaders} from "@angular/common/http";
import {isNullOrUndefined} from "util";

@Injectable()
export class ApiConnectionService {

  private baseUrl: string = "http://localhost:3000/";
  private apis: object = {
    signup: "signup"
  };
  private authToken: string = null;
  private reqHeaders: HttpHeaders = new HttpHeaders();

  constructor(private http: Http) {
    if(localStorage.getItem("authToken")) {
      this.authToken = localStorage.getItem("authToken");
      this.reqHeaders.set("Authorization", "BEARER" + this.authToken);
    }
  }

  private getApiUrl (apiName: string): string | null {
    if(!this.apis.hasOwnProperty(apiName)){
      return null;
    }
    return this.baseUrl + this.apis[apiName];
  }

  public makePostApiRequest(apiName: string, apiData: any): Observable<Response> {
    let url = this.getApiUrl(apiName);
    if(isNullOrUndefined(apiData)) {
      apiData = {
        headers: this.reqHeaders
      }
    } else {
      apiData.headers = this.reqHeaders;
    }
    if(url !== null) {
      return this.http.post(url, apiData);
    }
  }

  public makeGetApiRequest(apiName: string, apiData: any): Observable<Response> {
    let url = this.getApiUrl(apiName);
    if(isNullOrUndefined(apiData)) {
      apiData = {
        headers: this.reqHeaders
      }
    } else {
      apiData.headers = this.reqHeaders;
    }
    if(url !== null) {
      return this.http.get(url, apiData);
    }
  }
}
