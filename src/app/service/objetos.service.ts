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

  constructor(
    public _http: Http,
    public _url: GlobalService
  ) {
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
}
