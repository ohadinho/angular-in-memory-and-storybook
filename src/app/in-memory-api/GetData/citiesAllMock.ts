import {IGetData} from '../igetData.interface';

export class CitiesAllMock implements IGetData {
    getData(payload: any, db?: any): any {
        const citiesDb = db['citiesDb'];
        return citiesDb;
    }
}
