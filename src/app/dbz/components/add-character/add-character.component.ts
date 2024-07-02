import {Component, EventEmitter, Output} from '@angular/core';
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  public character: Character = {
    name: '',
    power: 0
  };

  @Output()
  public addNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  constructor(
  ) {

  }

  public addCharacter(): void {
    if (this.character.name.trim().length === 0) {
      return;
    }
    console.log(this.character);
    this.addNewCharacter.emit({...this.character});
    this.character = {
      name: '',
      power: 0
    };
  }

}
