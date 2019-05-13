import {IGetData} from '../igetData.interface';
import {CityModel} from '../../models/city.model';
import {throwError} from 'rxjs';

export class CitiesAddMock implements IGetData {
    getData(payload: any, db?: any): any {
        const citiesDb = db['citiesDb'];
        const cityAlreadyExist = citiesDb.find(item => item.name === payload.req.body);
        if (cityAlreadyExist) {
          return throwError('City already exist');
        }

        const currentMaxId = Math.max.apply(Math, citiesDb.map(function(item: any) { return item.id; }));

        const newCity = new CityModel();
        newCity.name = payload.req.body;
        newCity.id = currentMaxId + 1;
        citiesDb.push(newCity);
        return newCity;
    }
}
