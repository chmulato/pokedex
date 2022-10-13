import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface PokeListResponse {
  created: string,
  modified: string,
  name: string,
  pokemon: any[],
  resource_uri: string
}

@Injectable()
export class PokemonsService {

  private url = 'https://dev.treinaweb.com.br/pokeapi';
  pokeList: any = [];

  pokemonList = [
    { name: 'Bulbasaur', number: 1 },
    { name: 'Charmander', number: 2 },
    { name: 'Squirtle', number: 3 },
    { name: 'Pikachu', number: 4 }
  ]

  constructor(
    private http: HttpClient
  ) { }

  listAll() {
    this.http.get<PokeListResponse>(`${this.url}/pokedex/1`)
     .subscribe(
      response => {
        response.pokemon.forEach(pokemon => {
          pokemon.number = this.getNumberFromUrl(pokemon.resource_uri);
        })
        this.pokeList = this.sortPokemon(response.pokemon)
        .filter(pokemon => pokemon.number < 1000);        
      }
     )
  }

  getNumberFromUrl(url : string){
    return parseInt(url.replace(/.*\/(\d+)\/$/, '$1'));
  }

  private sortPokemon(pokemonList: any[]){
    return pokemonList.sort((a, b) => {
      return (a.number > b.number ? 1 : -1);
    })
  }

}
