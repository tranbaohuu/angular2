import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Barathum'},
      {id: 12, name: 'Doom'},
      {id: 13, name: 'Spectre'},
      {id: 14, name: 'Axe'},
      {id: 15, name: 'Lina'},
      {id: 16, name: 'Rubic'},
      {id: 17, name: 'Huska'},
      {id: 18, name: 'Kunkka'},
      {id: 19, name: 'Sven'},
      {id: 20, name: 'Magnus'}
    ];
    return {heroes};
  }
}