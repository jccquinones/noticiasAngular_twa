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
    private _objetosService: ObjetosService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {

  }

  ngOnInit() {
    console.log('producto-detail.Component.ts cargado...');

    this.getProducto();

  }

  getProducto(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._objetosService.getObjeto(id).subscribe(
        response => {

          this.objeto = response;
          console.log(this.objeto);
          //this._router.navigate(['/productos']);

        },
        error => {
          console.log(<any>error);
        }
      );
    });
  }

}
