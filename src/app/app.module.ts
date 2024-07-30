import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageModule } from './pages/home-page/home-page.module';
import { LoginPageModule } from './pages/login-page/login-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginPageModule,
    HomePageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
