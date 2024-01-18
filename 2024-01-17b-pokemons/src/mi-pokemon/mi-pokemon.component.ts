import { Component } from '@angular/core';

@Component({
  selector: 'mi-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './mi-pokemon.component.html',
  styleUrl: './mi-pokemon.component.css'
})
export class MiPokemonComponent {
  name: string = 'bulbasaur';
  height: number = 87;
  weight: number = 114;
  image: string = '/assets/images/Bulbasaur.webp';
}
