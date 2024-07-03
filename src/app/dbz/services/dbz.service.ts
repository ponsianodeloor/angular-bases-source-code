import { Injectable } from '@angular/core';
import {Character} from "../interfaces/character.interface";
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    }
  ];

  constructor() { }

  public addCharacter(character: Character): void {
    character.id = uuid();
    this.characters.push(character);
    //const newCharacter: Character = { id: uuid(), ...character};
    //this.characters.push(newCharacter);
    console.log("Character added in main:")
    console.log(character);
  }

  public deleteCharacter(index: number): void {
    console.log("Character deleted in main:" + index);
    this.characters.splice(index, 1);
  }

  public deleteCharacterById(id: string): void {
    console.log("Character deleted in main:" + id);
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
