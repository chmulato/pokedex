import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  selectedPkm = null;

  pokemonList : any;

  get pkmSprite() {
    const number = ("000" + this.selectedPkm).slice(-3);
    return `//serebbi.net/sunmoon/pokemon/${number}.png`
  }

  constructor(
   private pokemonsService: PokemonsService
  ) {
    this.pokemonList = this.pokemonsService.getPokemons();
  }

  ngOnInit(): void {
  }

  selectPokemon(pkm: any) {
    this.selectedPkm = pkm;
  }

}
