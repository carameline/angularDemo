import { Component, Input } from '@angular/core';
import { Annonce } from '../../../models/annonce.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-annonce-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './annonce-card.component.html',
  styleUrls: ['./annonce-card.component.css']
})
export class AnnonceCardComponent {
	@Input() annonce!: Annonce;
	
	
	toggleFavori(annonce: Annonce): void {
	  annonce.favori = !annonce.favori;
	}
}
