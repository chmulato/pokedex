import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  selectedPkm = null;

   pokemonList = [
    { name: 'Bulbasaur', number: 1 },
    { name: 'Charmander', number: 2 },
    { name: 'Squirtle', number: 3 },
    { name: 'Pikachu', number: 4 }
  ]


  get pkmSprite() {
    const number = ("000" + this.selectedPkm).slice(-3);
    return `//serebbi.net/sunmoon/pokemon/${number}.png`
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  selectPokemon(pkm: any) {
    this.selectedPkm = pkm;
  }

}
