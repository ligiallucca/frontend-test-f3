import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contributions-card',
  templateUrl: './contributions-card.component.html',
  styleUrls: ['./contributions-card.component.less'],
})
export class ContributionsCardComponent {
  @Input() cardTitle: string = '';
  @Input() contributionValue: string = '0';
  @Input() salaryPercentValue: string = '0';
}
