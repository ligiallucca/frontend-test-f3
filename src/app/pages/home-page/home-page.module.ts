import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HeaderModule } from './components/header/header.module';
import { ContributionsModule } from './components/contributions/contributions.module';
import { NavigationMenuModule } from './components/navigation-menu/navigation-menu.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HeaderModule,
    ContributionsModule,
    NavigationMenuModule,
  ],
  exports: [HomePageComponent],
})
export class HomePageModule {}
