import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cidadeDTO } from '../../models/cidade.dto';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the CidadeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CidadeProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CidadeProvider Provider');
  }

  findAll(): Observable<cidadeDTO>{
    return this.http.get<cidadeDTO>("http://localhost:8081/cidades/1");
  }

}
