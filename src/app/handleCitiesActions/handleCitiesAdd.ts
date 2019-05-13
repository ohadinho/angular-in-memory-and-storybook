import {CityUiContent} from '../models/cityUiContent.model';
import {of} from 'rxjs';
import {StaticUiMessages} from './staticUiMessages';
import {catchError, map} from 'rxjs/operators';
import {empty} from 'rxjs/internal/Observer';
import {ApiService} from '../api/api.service';

export class HandleCitiesAdd {
  public cityUiContent = new CityUiContent();
  private _apiService: ApiService;

  constructor(private apiService: ApiService) {
    this._apiService = apiService;
  }

  public handle() {
    this.cityUiContent.response$ = of(StaticUiMessages.PLEASE_WAIT);

    this.apiService.citiesAdd(this.cityUiContent.city.name).pipe(map(city => {
      Object.assign(this.cityUiContent.city, city);
      this.cityUiContent.response$ = of('Id: ' + this.cityUiContent.city.id);
    }), catchError(error => {
      this.cityUiContent.response$ = of(error);
      return of(empty);
    })).subscribe();
  }
}
