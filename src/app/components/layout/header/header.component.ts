import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isDarkTheme = false;
   menuOpen = false;
   
  toggleTheme(): void {
	  const body = document.body;
	  this.isDarkTheme = !this.isDarkTheme;
	  body.classList.toggle('dark-theme');
	  body.classList.toggle('light-theme');
	}

	toggleMenu(): void {
		this.menuOpen = !this.menuOpen;
	  }
}
