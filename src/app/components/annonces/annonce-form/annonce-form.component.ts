import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AnnoncesService } from '../../../services/annonces.service';
import { Annonce } from '../../../models/annonce.model';
import { CATEGORIES } from '../../../data/categories.data';

@Component({
  selector: 'app-annonce-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './annonce-form.component.html',
  styleUrls: ['./annonce-form.component.css']
})
export class AnnonceFormComponent {
  annonce = {
    id: '',
    titre: '',
    description: '',
    prix: 0,
    datePublication: new Date(),
    favori: false,
    categorie: ''
  };

  categories = CATEGORIES;

  constructor(private annoncesService: AnnoncesService, private router: Router) {}

  onSubmit() {
    this.annonce.id = Date.now().toString();
    this.annonce.datePublication = new Date();

    this.annoncesService.addAnnonce(this.annonce);
    this.router.navigate(['/mon-compte/mes-annonces'], {queryParams: { message: 'Annonce publiée avec succès !' }});
  }
}
