export interface Annonce {
  id: string;
  titre: string;
  description: string;
  prix: number;
  datePublication: Date;
  favori: boolean;
  categorie: string;
}