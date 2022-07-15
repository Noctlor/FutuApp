import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FutuinputComponent } from './components/futuinput/futuinput.component';
import { VerPersonajesComponent } from './Pages/ver-personajes/ver-personajes.component';
import { FutuformComponent } from './components/futuform/futuform.component';





@NgModule({
  declarations: [
    FutuinputComponent,
    VerPersonajesComponent,
    FutuformComponent,
  ],
  exports:[
    FutuinputComponent,
    VerPersonajesComponent,
    FutuformComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class FutudataModule { }
