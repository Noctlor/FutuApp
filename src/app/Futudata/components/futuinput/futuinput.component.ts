import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { VerPersonajesComponent } from '../../Pages/ver-personajes/ver-personajes.component';

@Component({
  selector: 'app-futuinput',
  templateUrl: './futuinput.component.html',
  styles: [
  ]
})
export class FutuinputComponent implements OnInit {

  ngOnInit() {
    this.deboncer
    .pipe(	
      debounceTime(300)
    )
    .subscribe(valor =>{
      this.onDebounce.emit(valor);
    })

  }

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();
  @Input() placeholder : string = "";
  deboncer : Subject<string> = new Subject ;
   
  termino : string = "";
  buscar(){

    console.log(this.termino)
    this.onEnter.emit(this.termino);
    
  }
  teclapre(){
    this.deboncer.next(this.termino);
  }

}
