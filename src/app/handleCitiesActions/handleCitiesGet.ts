import {CityUiContent} from '../models/cityUiContent.model';
import {ApiService} from '../api/api.service';
import {empty} from 'rxjs/internal/Observer';
import {of} from 'rxjs';
import {StaticUiMessages} from './staticUiMessages';
import {catchError, map} from 'rxjs/operators';

export class HandleCitiesGet {
  public cityUiContent = new CityUiContent();
  private _apiService: ApiService;

  constructor(private apiService: ApiService) {
    this._apiService = apiService;
  }

  public handle() {
    this.cityUiContent.response$ = of(StaticUiMessages.PLEASE_WAIT);

    this.apiService.citiesGet(this.cityUiContent.city.id).pipe(map(city => {
      Object.assign(this.cityUiContent.city, city);
      this.cityUiContent.response$ = of('Name: ' + this.cityUiContent.city.name);
    }), catchError(error => {
      this.cityUiContent.response$  = of(error);
      return of(empty);
    })).subscribe();
  }
}
