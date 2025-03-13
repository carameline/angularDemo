import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Annonce } from '../../models/annonce.model';
import { AnnoncesService } from '../../services/annonces.service';
import { AnnonceCardComponent } from '../shared/annonce-card/annonce-card.component';
import * as AOS from 'aos';
import { FormsModule } from '@angular/forms';
import { CATEGORIES } from '../../data/categories.data';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, AnnonceCardComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  latestAnnonces: Annonce[] = [];
  searchQuery = '';
  searchCategorie = '';
  categories = CATEGORIES;
  
  constructor(private annoncesService: AnnoncesService) {}

  ngOnInit(): void {
    const all = this.annoncesService.getAnnonces();
    this.latestAnnonces = all.slice(0, 4); 
	setTimeout(() => {
		AOS.refresh(); // Force le recalcul des animations
	  }, 100);
  }
  
  onSearch() {
    console.log('Recherche :', this.searchQuery, 'Catégorie :', this.searchCategorie);
  // Tu pourras plus tard rediriger ou filtrer localement
  }
}
