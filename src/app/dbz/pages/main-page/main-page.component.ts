import {Component} from '@angular/core';
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Krilin',
      power: 1000
    },
    {
      name: 'Goku',
      power: 9500
    }
  ];

  constructor() {

  }

  public addCharacter(character: Character): void {
    this.characters.push(character);
    console.log("Character added in main:")
    console.log(character);
  }

}
