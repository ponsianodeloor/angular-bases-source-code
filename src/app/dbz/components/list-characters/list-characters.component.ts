import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'app-dbz-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css']
})
export class ListCharactersComponent {

  @Input()
  public charactersList: Character[] = [];

  @Output()
  public deleteCharacterEvent: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  public deleteCharacterByIdEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  public deleteCharacter(index: number): void {
    console.log("Character deleted in list:" + index);
    this.deleteCharacterEvent.emit(index);
  }

  public deleteCharacterById(id: string): void {
    console.log("Character deleted in list:" + id);
    this.deleteCharacterByIdEvent.emit(id);
  }
}
