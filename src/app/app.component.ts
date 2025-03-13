import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component'; 
import { FooterComponent } from './components/layout/footer/footer.component';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'zappy-annonces';
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    AOS.init({
      duration: 800,
      once: true
    });
	
	this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(():void => {
          AOS.refreshHard(); 
        }, 100);
      }
    });
  }

}
