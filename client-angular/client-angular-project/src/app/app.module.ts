import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelpDeskloginComponent } from './help-desk-login/help-desk-login.component';
import { HomeComponent } from './home/home.component';
import { HelpDeskMainComponent } from './help-desk-main/help-desk-main.component';

const appRoutes: Routes = [
  {
    path: 'help-desk-login',
    component: HelpDeskloginComponent,
    data: { title: 'Help Desk Login' }
  },
  {
    path: 'help-desk-main',
    component: HelpDeskMainComponent,
    data: { title: 'Help Desk Main' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HelpDeskloginComponent,
    HomeComponent,
    HelpDeskMainComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule, 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
