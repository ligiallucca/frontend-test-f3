import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributionsComponent } from './contributions.component';
import { ChartModule } from 'primeng/chart';
import { ContributionsCardModule } from '../contributions-card/contributions-card.module';

@NgModule({
  declarations: [ContributionsComponent],
  imports: [CommonModule, ChartModule, ContributionsCardModule],
  exports: [ContributionsComponent],
})
export class ContributionsModule {}
