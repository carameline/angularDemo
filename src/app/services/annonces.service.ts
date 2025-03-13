import { Injectable } from '@angular/core';
import { Annonce } from '../models/annonce.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {

  private annonces: Annonce[] = [
  {
    id: '1',
    titre: 'Vélo de course',
    description: 'Vélo en bon état, peu servi.',
    prix: 150,
    datePublication: new Date('2025-03-09'),
    favori: false,
    categorie: 'Sport'
  },
  {
    id: '2',
    titre: 'MacBook Pro 2020',
    description: 'Très bon état, 16Go RAM.',
    prix: 1000,
    datePublication: new Date('2025-03-10'),
    favori: true,
    categorie: 'Multimédia'
  },
  {
    id: '3',
    titre: 'Appartement T2 à louer - Lyon',
    description: 'Bel appartement lumineux, proche métro.',
    prix: 750,
    datePublication: new Date('2025-03-08'),
    favori: false,
    categorie: 'Immobilier'
  },
  {
    id: '4',
    titre: 'Jeux PS5 - Bundle 5 titres',
    description: 'Inclut Horizon, Spider-Man, FIFA, etc.',
    prix: 80,
    datePublication: new Date('2025-03-07'),
    favori: false,
    categorie: 'Multimédia'
  },
  {
    id: '5',
    titre: 'Canapé 3 places en tissu gris',
    description: 'Très confortable, bon état, peu utilisé.',
    prix: 200,
    datePublication: new Date('2025-03-11'),
    favori: false,
    categorie: 'Maison'
  },
  {
    id: '6',
    titre: 'Scooter électrique neuf',
    description: 'Autonomie 50km, batterie amovible.',
    prix: 1200,
    datePublication: new Date('2025-03-06'),
    favori: true,
    categorie: 'Auto / Moto'
  },
  {
    id: '7',
    titre: 'Montre connectée Garmin',
    description: 'Suivi santé, GPS, étanche.',
    prix: 90,
    datePublication: new Date('2025-03-05'),
    favori: false,
    categorie: 'Mode'
  },
  {
    id: '8',
    titre: 'Table de salon en bois massif',
    description: 'Style industriel, très robuste.',
    prix: 130,
    datePublication: new Date('2025-03-04'),
    favori: false,
    categorie: 'Maison'
  },
  {
    id: '9',
    titre: 'iPhone 13 - 128Go',
    description: 'Écran nickel, batterie 90%.',
    prix: 600,
    datePublication: new Date('2025-03-03'),
    favori: true,
    categorie: 'Multimédia'
  },
  {
    id: '10',
    titre: 'Tondeuse thermique',
    description: 'Marche très bien, idéale pour jardin de 500m².',
    prix: 110,
    datePublication: new Date('2025-03-02'),
    favori: false,
    categorie: 'Bricolage'
  }
];


  getAnnonces(): Annonce[] {
    return this.annonces;
  }
  
  getAnnonceById(id: string): Observable<Annonce | undefined> {
    const annonce = this.annonces.find((a) => a.id === id);
    return of(annonce);
  }
  
  addAnnonce(nouvelleAnnonce: Annonce): void {
	  this.annonces.unshift(nouvelleAnnonce); 
	}
}
