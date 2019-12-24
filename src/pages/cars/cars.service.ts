import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { GlobalFunctions } from '../../functions/global.service';

@Injectable()
export class CarsService {

  entities: any;
  apiUrl: any;
  modelval: any;

  constructor(
    private http: Http,
    private globalFunctions: GlobalFunctions,
  ) {
    this.apiUrl = globalFunctions.getAPIUrl();
  }

  

  private buildRouteParams(routePath, page, id) {

    let routeParams = "id=" + id + "&page=" + page ;

    return routePath + "?" + routeParams;

  }

  loadEntities(page: number, id: number): Observable<string[]> {
    const routePath = "cars/list.php";
    let routeParams = this.buildRouteParams(routePath, page, id);

    return this.http.get(this.apiUrl + routeParams)

      .map(this.extractEntitiesData)
      .catch(this.handleError);
  }

  showEntity(id: number): Observable<string[]> {

    return this.http.get(this.apiUrl + "cars/show.php?id=" + id)

      .map(this.extractEntityData)
      .catch(this.handleError);
  }

  private extractEntitiesData(res: Response) {

    let entities = res.json();

    return entities || {};
  }

  private extractEntityData(res: Response) {
    let entity = res.json().data;
    return entity || {};
  }

  private handleError(error: Response | any) {

    let errMsg = this.globalFunctions.handleError(error, this.entities.error, this.entities);

    return Observable.throw(errMsg);
  }

}
