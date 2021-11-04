import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      { id: 1, name: 'Dr Nice', power: 'Really Smart', alterEgo: '' },
      { id: 2, name: 'Narco', power: 'Super Flexible', alterEgo: '' },
      { id: 3, name: 'Bombasto', power: 'Super Hot', alterEgo: '' },
      { id: 4, name: 'Celeritas', power: 'Weather Changer', alterEgo: '' },
      { id: 5, name: 'Magneta', power: 'Really Smart', alterEgo: '' },
      { id: 6, name: 'RubberMan', power: 'Super Flexible', alterEgo: '' },
      { id: 7, name: 'Dynama', power: 'Super Hot', alterEgo: '' },
      { id: 8, name: 'Dr IQ', power: 'Weather Changer', alterEgo: '' },
      { id: 9, name: 'Magma', power: 'Really Smart', alterEgo: '' },
      { id: 10, name: 'Tornado', power: 'Super Flexible', alterEgo: '' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
