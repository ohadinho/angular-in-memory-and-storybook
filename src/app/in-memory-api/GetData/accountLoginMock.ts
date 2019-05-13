import {IGetData} from '../igetData.interface';

export class accountLoginMock implements IGetData {
    getData(payload: any, db?: any): any {
        const selfServiceDb = db['selfServiceDb'];
    }
}
