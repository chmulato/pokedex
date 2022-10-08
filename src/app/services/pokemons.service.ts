import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor() { }

  getPokemons(){
    return [
      { name: 'Bulbasaur', number: 1 },
      { name: 'Charmander', number: 2 },
      { name: 'Squirtle', number: 3 },
      { name: 'Pikachu', number: 4 }
    ]
  }

}
