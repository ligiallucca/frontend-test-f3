import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HeaderModule } from './components/header/header.module';
import { ContributionsModule } from './components/contributions/contributions.module';
import { ContributionsCardModule } from './components/contributions-card/contributions-card.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HeaderModule,
    ContributionsModule,
    ContributionsCardModule,
  ],
  exports: [HomePageComponent],
})
export class HomePageModule {}
