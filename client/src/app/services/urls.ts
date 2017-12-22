import {Injectable} from "@angular/core";

export class UrlStorage {
  public urls = {
    familyList: '/api/info/familylist'
  };

  public getUrl(name) {
    return this.urls[name] || null;
  }
}
