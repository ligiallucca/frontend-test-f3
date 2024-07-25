import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageModule } from './pages/home-page/home-page.module';
import { LoginPageModule } from './pages/login-page/login-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LoginPageModule, HomePageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
