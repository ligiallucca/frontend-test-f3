import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.less'],
})
export class NavigationMenuComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Ver Extrato',
        icon: 'custom-icon-invoice-dollar',
      },
      {
        label: 'Contribuição Mensal',
        icon: 'custom-icon-envelope-open-dollar',
      },
      {
        label: 'Contribuição Extra',
        icon: 'custom-icon-sack-dollar',
      },
      {
        label: 'Documentos',
        icon: 'custom-icon-file-alt',
      },
      {
        label: 'Regime de Tributação',
        icon: 'custom-icon-user-chart',
      },
      {
        label: 'Solicitar Benefício',
        icon: 'custom-icon-comment-dollar',
      },
      {
        label: 'Extrato Regressivo',
        icon: 'custom-icon-file-chart-line',
      },
      {
        label: 'Informações',
        icon: 'custom-icon-info',
      },
    ];
  }
}
