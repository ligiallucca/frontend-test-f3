import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.less'],
})
export class ContributionsComponent implements OnInit {
  data: any;

  options: any;

  ngOnInit() {
    this.data = {
      labels: ['Contribuição Mensal', 'Contribuição Voluntária'],
      datasets: [
        {
          data: [699.999, 399.999],
          backgroundColor: ['#594CBE', '#E22E6F'],
        },
      ],
    };

    this.options = {
      cutout: '60%',
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: '#21232a',
          },
          font: {
            size: 14,
          },
          position: 'bottom',
        },
      },
    };
  }
}
