import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from "@angular/router";
import { ObjetosService} from "../../service/objetos.service";
import { Objeto} from "../../model/objeto";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  providers: [ObjetosService]
})
export class ListadoComponent implements OnInit {

  public objetos: Objeto[];

  constructor(
    private objetoService: ObjetosService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {

    this.objetoService.getObjetos().subscribe(

      result => {
        // se retornan los articulos de api-news
        this.objetos = result.articles;
        console.log(result.articles);
      }
    )

  }

}
