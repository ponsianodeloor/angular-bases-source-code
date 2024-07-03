import { Injectable } from '@angular/core';
import {Character} from "../interfaces/character.interface";

@Injectable({
  providedIn: 'root'
})
export class DbzService {

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

  constructor() { }

  public addCharacter(character: Character): void {
    this.characters.push(character);
    console.log("Character added in main:")
    console.log(character);
  }

  public deleteCharacter(index: number): void {
    console.log("Character deleted in main:" + index);
    this.characters.splice(index, 1);
  }
}
