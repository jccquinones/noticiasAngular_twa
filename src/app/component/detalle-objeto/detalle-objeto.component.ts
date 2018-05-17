import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ObjetosService} from  '../../service/objetos.service';
import {Objeto} from "../../model/objeto";

@Component({
  selector: 'app-detalle-objeto',
  templateUrl: './detalle-objeto.component.html',
  styleUrls: ['./detalle-objeto.component.css'],
  providers: [ObjetosService]
})
export class DetalleObjetoComponent implements OnInit {

  public objeto: Objeto;

  constructor(
    private objetosService: ObjetosService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    console.log('producto-detail.Component.ts cargado...');

    this._route.params.forEach((params: Params) => {

        const id = params['id'];

        this.objetosService.getObjeto(id).subscribe(

      result => {
              // se retornan el articulo desde api-news
              this.objeto = result.articles[id];
              console.log(result.articles);
           }
        )

    }
  }

  getObjeto(id){
    // se retornan los articulos de api-news
    /*this.objeto = result.articles[id];
    console.log(result.articles);*/
    /*this._route.params.forEach((params: Params) => {
      let url = params['url'];

    });*/

  }

}
