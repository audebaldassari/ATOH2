import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, firstname: 'Dr', lastname: 'Nice' },
      { id: 12, firstname: 'Lepsi', lastname: 'Narco' },
      { id: 13, firstname: 'Bombe', lastname: 'Bombasto' },
      { id: 14, firstname: 'Celeri', lastname: 'Celeritas' },
      { id: 15, firstname: 'Magneto', lastname: 'Megneta' },
      { id: 16, firstname: 'Ruban', lastname: 'RuberMan' },
      { id: 17, firstname: 'Dynamo', lastname: 'Dynama' },
      { id: 18, firstname: 'Mr', lastname: 'IQ' },
      { id: 19, firstname: 'Magni', lastname: 'Magna' },
      { id: 20, firstname: 'Vent', lastname: 'Tornado' }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
