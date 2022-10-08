import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  nameFilter = '';

  selectedPkm = null;

  get pokemonList() {
    return this.pokemonsService.pokemonList.filter(pokemon => {
      return pokemon.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1;
    })
  }

  get pkmSprite() {
    const number = ('000' + this.selectedPkm).slice(-3);
    return `//serebbi.net/sunmoon/pokemon/${number}.png`;
  }

  constructor(
   private pokemonsService: PokemonsService
  ) { }

  ngOnInit(): void {
  }

  selectPokemon(pkm: any) {
    this.selectedPkm = pkm;
  }

}
