import { Component, OnInit,HostListener } from '@angular/core';
import { Annonce } from '../../../models/annonce.model';
import { AnnoncesService } from '../../../services/annonces.service';
import { CommonModule } from '@angular/common';
import { RouterModule  } from '@angular/router';
import { AnnonceCardComponent } from '../../shared/annonce-card/annonce-card.component'; 
import * as AOS from 'aos';
import { CATEGORIES } from '../../../data/categories.data';
import { FormsModule } from '@angular/forms';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-annonce-list',
  imports: [CommonModule, RouterModule, AnnonceCardComponent, FormsModule],
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.css']
})
export class AnnonceListComponent implements OnInit {
	annonces: Annonce[] = [];
	searchQuery = '';
	searchCategorie = '';
	categories = CATEGORIES;
	
	loadedAnnonces: Annonce[] = [];
	pageSize = 6;
	currentIndex = 0;

	filteredAnnonces: Annonce[] = [];
	
	constructor(private annoncesService: AnnoncesService,private navigationService: NavigationService) {
		
	}

	ngOnInit(): void {
		
		const all = this.annoncesService.getAnnonces();
		this.annonces = all;
		this.filteredAnnonces = all;
		this.loadedAnnonces = [];
		this.currentIndex = 0;
		this.loadMoreAnnonces();
		this.navigationService.setSource('annonces');
		
	}
	
	onSearch(): void {
	  const filtered = this.annonces.filter(a =>
		(!this.searchQuery || a.titre.toLowerCase().includes(this.searchQuery.toLowerCase())) &&
		(!this.searchCategorie || a.categorie === this.searchCategorie)
	  );

	  
	  this.filteredAnnonces = filtered;
	  this.resetInfiniteScroll();
	}
	
	resetInfiniteScroll(): void {
	  this.loadedAnnonces = [];
	  this.currentIndex = 0;
	  this.loadMoreAnnonces();
	}


	loadMoreAnnonces(): void {
		const next = this.filteredAnnonces.slice(this.currentIndex, this.currentIndex + this.pageSize);
		this.loadedAnnonces = [...this.loadedAnnonces, ...next];
		this.currentIndex += this.pageSize;
	}
	

	@HostListener('window:scroll', [])
	onWindowScroll(): void {
	  const scrollY = window.scrollY || window.pageYOffset;
	  const pageHeight = document.documentElement.scrollHeight;
	  const windowHeight = window.innerHeight;

	  if (scrollY + windowHeight >= pageHeight - 100) {
		this.loadMoreAnnonces();
	  }
	}
}
