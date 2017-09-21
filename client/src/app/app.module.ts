import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";
import { MainPageComponent } from './main-page/main-page.component';
import { PhotographyComponent } from './photography/photography.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ResumeComponent } from './resume/resume.component';
import { CandidPhotographyComponent } from './candid-photography/candid-photography.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {AlertModule} from "ngx-bootstrap";
import { FinancialComponent } from './financial/financial.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BasicValuationComponent } from './financial/components/basic-valuation/basic-valuation.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LoginComponent } from './login/login.component';
import { AdminConsoleComponent } from './admin-console/admin-console.component';
import {AuthenticationService} from "./baseclasses/AuthenticationService";
import {HttpModule} from "@angular/http";

const appRoutes = [
  {
    path: "",
    component: MainPageComponent,
  },
  {
    path: "admin-panel",
    component: AdminPanelComponent,
    children: [
      {
        path: "console",
        component: AdminConsoleComponent,
      },
      {
        path: "login",
        component: LoginComponent,
      }
    ]
  },
  {
    path: "resume",
    component: ResumeComponent
  },
  {
    path: "applications",
    component: ApplicationsComponent,
    children: []
  },
  {
    path: "photography",
    component: PhotographyComponent,
    children: [
      {
        path: "candid",
        component: CandidPhotographyComponent
      }
    ]
  },
  {
    path: "applications/financial",
    component: FinancialComponent,
    children: [
      {
        path: "basic-valuation",
        component: BasicValuationComponent
      }
    ]
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MainPageComponent,
    PhotographyComponent,
    ApplicationsComponent,
    ResumeComponent,
    CandidPhotographyComponent,
    NavBarComponent,
    FinancialComponent,
    SidebarComponent,
    BasicValuationComponent,
    AdminPanelComponent,
    LoginComponent,
    AdminConsoleComponent
  ],
  imports: [
    AlertModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
