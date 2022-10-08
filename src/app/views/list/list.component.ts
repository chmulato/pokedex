import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  isVisible : boolean;

  nomeTexto : string;

  pokemonList = [
    { name: 'Bulbasaur', number: 1 },
    { name: 'Charmander', number: 2 },
    { name: 'Squirtle', number: 3 },
    { name: 'Pikachu', number: 4 }
  ]

  constructor() { 
    this.isVisible = true;
    this.nomeTexto = "Treina Web";
  }

  ngOnInit(): void {
  }

  handleClick() {
    alert('Hi!');
  }

}
