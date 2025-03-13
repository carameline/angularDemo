import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  
  private source: string = ''; 

  setSource(source: string) {
    this.source = source;
  }

  getSource(): string {
    return this.source;
  }
}
