import {Component} from '@angular/core';
import {DbzService} from "../../services/dbz.service";
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(
    private dbz: DbzService
  ) {
    console.log(dbz.characters);
  }

  get characters() {
    return this.dbz.characters;
  }

  addCharacter(character:Character):void{
    this.dbz.addCharacter(character);
  }

  deleteCharacter(index:number):void {
    this.dbz.deleteCharacter(index);
  }

  deleteCharacterById(id:string):void {
    this.dbz.deleteCharacterById(id);
  }

}
