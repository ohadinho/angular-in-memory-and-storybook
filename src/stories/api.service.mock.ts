import {Injectable} from '@angular/core';
import {Observable, from, of, throwError} from 'rxjs';
import {CityModel} from '../app/models/city.model';
import {empty} from 'rxjs/internal/Observer';

@Injectable()
export class ApiServiceMock {
    public static readonly BASE_PATH = 'api/Server';
    private citiesInitialDb: CityModel[] = [
      {
        id: 1,
        name: 'New-York'
      },
      {
        id: 2,
        name: 'Bangkok'
      },
      {
        id: 3,
        name: 'Zurich'
      },
      {
        id: 4,
        name: 'Holon'
      }
    ];

    public citiesAll(): Observable<CityModel[]> {
      return from([this.citiesInitialDb]);
    }

    public citiesAdd(cityName: string): Observable<CityModel> {
      const cityAlreadyExist = this.citiesInitialDb.find(item => item.name === cityName);
      if (cityAlreadyExist) {
        return throwError('City already exist');
      }

      const currentMaxId = Math.max.apply(Math, this.citiesInitialDb.map(function(item: any) { return item.id; }))

      const newCity = new CityModel();
      newCity.name = cityName;
      newCity.id = currentMaxId + 1;
      this.citiesInitialDb.push(newCity);

      return of(newCity);
    }

    public citiesGet(id: string): Observable<any> {
      const requestedId = parseInt(id, 10);
      const found = this.citiesInitialDb.find(city => city.id === requestedId);
      const response = found ? of(found) : throwError('No city was found!');
      return response;
    }
}
