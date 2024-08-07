import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  exports: [
    MainPageComponent,
  ],
  declarations: [
    MainPageComponent,
    ListCharactersComponent,
    AddCharacterComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class DbzModule { }
