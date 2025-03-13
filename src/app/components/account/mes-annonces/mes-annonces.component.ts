import { ActivatedRoute, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnoncesService } from '../../../services/annonces.service';
import { Annonce } from '../../../models/annonce.model';
import { AnnonceCardComponent } from '../../shared/annonce-card/annonce-card.component';
import { NavigationService } from '../../../services/navigation.service'; // Chemin vers le service


@Component({
  selector: 'app-mes-annonces',
  imports: [CommonModule, AnnonceCardComponent, RouterModule],
  templateUrl: './mes-annonces.component.html',
  styleUrl: './mes-annonces.component.css'
})
export class MesAnnoncesComponent {
	mesAnnonces: Annonce[] = [];
	message: string | null = null;
	constructor(
		private route: ActivatedRoute,
		private annoncesService: AnnoncesService,
		private navigationService: NavigationService
	) {}
	
	ngOnInit(): void {
		this.route.queryParams.subscribe(params => {
		  this.message = params['message'] || null;
		});
		
		const all = this.annoncesService.getAnnonces();
		this.mesAnnonces = all.filter(a => Number(a.id) > 1_000_000_000_000); 
		
		this.navigationService.setSource('mes-annonces');
	 
	}
}
