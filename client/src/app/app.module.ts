import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";
import { AlexandrSarioglo } from './components/alexandr-sarioglo/alexandr-sarioglo.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { ResumeComponent } from './components/resume/resume.component';
import { CandidPhotographyComponent } from './components/candid-photography/candid-photography.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {AlertModule} from "ngx-bootstrap";
import { FinancialComponent } from './components/financial/financial.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BasicValuationComponent } from './components/financial/components/basic-valuation/basic-valuation.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { LoginComponent } from './components/login/login.component';
import { AdminConsoleComponent } from './components/admin-console/admin-console.component';
import {AuthenticationService} from "./components/baseclasses/AuthenticationService";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ApiConnectionService} from "./components/baseclasses/ApiConnectionService";
import { LandingComponent } from './components/landing/landing.component';
import {RequestService} from "./services/request.service";
import {UrlStorage} from "./services/urls";

const appRoutes = [
  {
    path: "",
    component: LandingComponent,
  },
  {
    path: "AlexandrSarioglo",
    component: AlexandrSarioglo,
    children: [
      {
        path: "resume",
        component: ResumeComponent
      },
    ]
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
    AlexandrSarioglo,
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
    AdminConsoleComponent,
    LandingComponent
  ],
  imports: [
    AlertModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationService,
    ApiConnectionService,
    RequestService,
    UrlStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
