import { Routes, provideRouter  } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AnnonceListComponent } from './components/annonces/annonce-list/annonce-list.component';
import { AnnonceDetailComponent } from './components/annonces/annonce-detail/annonce-detail.component';
import { HomeComponent } from './components/home/home.component';
import { AnnonceFormComponent } from './components/annonces/annonce-form/annonce-form.component';
import { MesAnnoncesComponent } from './components/account/mes-annonces/mes-annonces.component';
import { FavorisComponent } from './components/account/favoris/favoris.component';
import { MonCompteComponent } from './components/account/mon-compte/mon-compte.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'annonces', component: AnnonceListComponent },
  { path: 'annonces/:id', component: AnnonceDetailComponent },
  {
	  path: 'mon-compte',
	  component: MonCompteComponent,
	  children: [
		  { path: '', redirectTo: 'mes-annonces', pathMatch: 'full' },
		  { path: 'publier', component: AnnonceFormComponent },
		  { path: 'mes-annonces', component: MesAnnoncesComponent },
		  { path: 'favoris', component: FavorisComponent }
		]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {}