import {Component} from '@angular/core';
import {DbzService} from "../../services/dbz.service";

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(
    public dbz: DbzService
  ) {
    console.log(dbz.characters);
  }
}
