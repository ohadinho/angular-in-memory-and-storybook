import {CityModel} from './city.model';
import {Observable} from 'rxjs';

export class CityUiContent {
  city: CityModel = new CityModel();
  response$: Observable<string>;
}
