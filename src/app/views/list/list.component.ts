import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

export type Pokemon = {
  name: string,
  resource_uri: string
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  nameFilter = '';
  selectedPkm : Pokemon | null = null;

  get pokemonList(){
    return this.pokemonService.pokeList.filter((pokemon: any) => {
      return pokemon.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1;
    })
  }

  get pkmSprite(){
    if (this.selectedPkm) {
      const number = ('000' + Number(this.pokemonService.getNumberFromUrl(this.selectedPkm.resource_uri))).slice(-3);
      console.log(number);
      return `https://serebii.net/sunmoon/pokemon/${number}.png`;
    }
    return `https://serebii.net/sunmoon/pokemon/001.png`;
  }

  constructor(
    private pokemonService: PokemonsService
  ) {  }

  ngOnInit() {
    this.pokemonService.listAll();
  }
  
  selectPokemon(pkm: any){
    this.selectedPkm = pkm;
  }

}