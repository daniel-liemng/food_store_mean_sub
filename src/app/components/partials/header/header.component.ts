import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  open: boolean = false;

  toggleMenu() {
    this.open = !this.open;
  }
}