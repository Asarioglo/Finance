import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from "@angular/common/http";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";
import { MainPageComponent } from './main-page/main-page.component';
import { PhotographyComponent } from './photography/photography.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ResumeComponent } from './resume/resume.component';

const appRoutes = [
  {
    path: "",
    component: MainPageComponent,
    children: [
      {
        path: "resume",
        component: ResumeComponent
      },
      {
        path: "applications",
        component: ApplicationsComponent
      },
      {
        path: "photography",
        component: PhotographyComponent
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
    ResumeComponent
  ],
  imports: [
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
