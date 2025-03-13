import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Annonce } from '../../../models/annonce.model';
import { AnnoncesService } from '../../../services/annonces.service';
import { AnnonceCardComponent } from '../../shared/annonce-card/annonce-card.component';
import { NavigationService } from '../../../services/navigation.service';


@Component({
  selector: 'app-favoris',
  imports: [CommonModule, AnnonceCardComponent],
  templateUrl: './favoris.component.html',
  styleUrl: './favoris.component.css'
})
export class FavorisComponent implements OnInit{
  favoris: Annonce[] = [];

  constructor(private annoncesService: AnnoncesService,private navigationService: NavigationService) {  }

  ngOnInit(): void {
    const all = this.annoncesService.getAnnonces();
    this.favoris = all.filter(a => a.favori);
	this.navigationService.setSource('favoris');
  }
}
