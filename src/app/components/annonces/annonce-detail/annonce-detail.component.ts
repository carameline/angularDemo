import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnoncesService } from '../../../services/annonces.service';
import { Annonce } from '../../../models/annonce.model';
import { CommonModule } from '@angular/common';
import { catchError, of } from 'rxjs';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-annonce-detail',
  imports: [CommonModule],
  templateUrl: './annonce-detail.component.html',
  styleUrls: ['./annonce-detail.component.css']
})
export class AnnonceDetailComponent implements OnInit {

  annonce?: Annonce;
  erreur: boolean = false;
  source: string = '';
  
  constructor(
    private route: ActivatedRoute,
	private router: Router,
    private annoncesService: AnnoncesService,
	private navigationService: NavigationService
  ) {  }

  ngOnInit(): void {
	  
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.annoncesService.getAnnonceById(id)
        .pipe(
          catchError((err) => {
            this.erreur = true;

            //this.router.navigate(['/404']);
            return of(undefined);
          })
        )
        .subscribe((data: Annonce | undefined) => {
          if (data) this.annonce = data;
        });
    } else {
      this.erreur = true;
    }
	
	this.source = this.navigationService.getSource();
  }
  
  toggleFavori(): void {
	  if (this.annonce) {
		this.annonce.favori = !this.annonce.favori;
	  }
	}

	goBack() {
		const routes: { [key: string]: string } = {
			'mes-annonces': '/mon-compte/mes-annonces',
			'annonces': '/annonces',
			'favoris': '/mon-compte/favoris' 
		};
		console.log(this.source);
		this.router.navigate([routes[this.source] || '/annonces']);
	  }
  
}
