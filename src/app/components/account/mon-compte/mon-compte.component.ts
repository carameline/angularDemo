import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-mon-compte',
  imports: [CommonModule, RouterModule],
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.css']
})
export class MonCompteComponent {

	menuOpen = false;
	toggleMenu(): void {
		this.menuOpen = !this.menuOpen;
	}
}
