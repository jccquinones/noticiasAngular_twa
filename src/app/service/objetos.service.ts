import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClientModule, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable} from "rxjs/Observable";
import { Objeto} from "../model/objeto";
import { GlobalService} from "./global.service";

@Injectable()
export class ObjetosService {

  public url: string;
  public favoritos: Objeto[];

  constructor(
    public _http: Http,
    public _url: GlobalService
  ) {
    this.favoritos = [];
    this.url = _url.getUrl();
  }

  getObjetos(){

    return this._http.get(this.url).map(res => res.json());
  }

  getObjeto(id){
    console.log(id);
    return this._http.get(this.url).map(res => res.json());
  }

  addObjeto(objeto: Objeto){
    let json = JSON.stringify(objeto);
    let params = 'json='+json;
    console.log(params);
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    return this._http.post(this.url+'/photos', params, {headers: headers})
      .map(
        res => res.json());
  }

  /** Metodo que obtiene los favoritos desde el LocalStorage del navegador
   * devuelve los favoritos del local storage*/
  getFavoritos() {
    if (localStorage.getItem('favoritos') == null) {
      this.favoritos = [];
    } else {
      this.favoritos = JSON.parse(localStorage.getItem('favoritos'));
    }

    return this.favoritos;
  }

  /** Guarda un objeto de la lista y lo guarda en LocalStorage como favorito*/
  guardarFavorito(favorito: Objeto) {
    this.favoritos.unshift(favorito);
    let favoritos  = [];
    if (localStorage.getItem('favoritos') == null) {
      favoritos = [];
      favoritos.unshift(favorito);
      localStorage.setItem('favoritos', JSON.stringify(favoritos));
    } else {
      favoritos = JSON.parse(localStorage.getItem('favoritos'));
      favoritos.unshift(favorito);
      localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }
  }

  /** Borra un objeto de favoritos*/
  borrarFavorito(favorito: Objeto) {
    for (let i = 0; this.favoritos.length; i++) {
      if (favorito == this.favoritos[i]) {
        this.favoritos.splice(i, 1 ) ;
        localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
        return this.favoritos;
      }
    }
  }
}
