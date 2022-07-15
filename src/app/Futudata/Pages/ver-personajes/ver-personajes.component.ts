import { Component, OnInit } from '@angular/core';
import { Futurama } from '../../interface/futurama.interface';
import { FuturamaService } from '../../service/futurama.service';

@Component({
  selector: 'app-ver-personajes',
  templateUrl: './ver-personajes.component.html',
  styles: [
  ]
})
export class VerPersonajesComponent implements OnInit {
  termino:string="";

  personajes: Futurama[]=[];

  constructor(private service:FuturamaService) { }

  ngOnInit(): void {
  }
  buscar(termino:string){
    this.termino=termino;
    this.service.buscarpersonaje(this.termino)
    .subscribe((personaje)=>{
           
      //this.personajes = personaje;
      console.log(personaje)
    })
  }

}
