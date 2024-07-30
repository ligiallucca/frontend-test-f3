import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { NavigationMenuComponent } from './navigation-menu.component';

@NgModule({
  declarations: [NavigationMenuComponent],
  imports: [CommonModule, MenuModule],
  exports: [NavigationMenuComponent],
})
export class NavigationMenuModule {}
