import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from "@angular/router";

import { ObjetosService} from "../../service/objetos.service";
import { Objeto} from "../../model/objeto";

@Component({
  selector: 'app-agregar-objeto',
  templateUrl: './agregar-objeto.component.html',
  styleUrls: ['./agregar-objeto.component.css'],
  providers: [ObjetosService]
})

export class AgregarObjetoComponent implements OnInit {

  public titulo: string;
  hide = true;
  public objeto: Objeto;
  numero = Math.floor((Math.random() * 100000) + 1) ;
  constructor(private _objetoService: ObjetosService){
    //this.objeto = new Objeto();
    //this.objeto.id = 1;
  }

  ngOnInit() {
    console.log('Creado Componente para Crear un Objeto')
  }

  crearObjeto(){
    console.log(this.objeto);
    this._objetoService.addObjeto(this.objeto).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occurred");
      }
    );
  }
}
