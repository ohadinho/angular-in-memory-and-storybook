import {IGetData} from '../igetData.interface';

export class CitiesInitDb implements IGetData {
    getData(payload: any, db?: any): any {
        const citiesInitialDb = [
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

        return citiesInitialDb;
    }
}
