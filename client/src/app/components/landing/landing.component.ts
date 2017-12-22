import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../services/request.service";
import {FamilyMemberContext} from "../../contexts/FamilyMembers";
import {AbstractMenuPage} from "../baseclasses/AbstractMenuPage";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent extends AbstractMenuPage {

  public FamilyMembers: Array<FamilyMemberContext>;

  constructor(private requestService: RequestService) {
    super();
  }

  initializeMenuItems() {
    this.requestService.getFamilyMembers().subscribe((data: Array<any>) => {
      this.FamilyMembers = [];
      for(let member of data) {
        let ctx = new FamilyMemberContext(member);
        if (ctx.valid()) {
          this.FamilyMembers.push(ctx);
        }
      }
    });
  }

  public getItemHeight (): string {
    return (Math.floor(100 / this.FamilyMembers.length * 100) / 100) + '%';
  }

}
