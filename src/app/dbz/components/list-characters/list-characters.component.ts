import {Component, Input} from '@angular/core';
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'app-dbz-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css']
})
export class ListCharactersComponent {

  @Input()
  public charactersList: Character[] = [
    {
      name: 'Trunks',
      power: 2500
    }
  ];
}
