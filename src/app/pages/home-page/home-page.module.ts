import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HeaderModule } from './components/header/header.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HeaderModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
