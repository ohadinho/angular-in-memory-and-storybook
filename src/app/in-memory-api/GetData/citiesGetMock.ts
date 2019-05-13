import {IGetData} from '../igetData.interface';
import {CityModel} from '../../models/city.model';
import {of, throwError} from 'rxjs';

export class CitiesGetMock implements IGetData {
    getData(payload: any, db?: any): any {
        const citiesDb: CityModel[] = db['citiesDb'];
        const requestedId = parseInt(payload.req.body, 10);
        const found = citiesDb.find(city => city.id === requestedId);
        const response = found ? of(found) : throwError('No city was found!');
        return response;
    }
}
