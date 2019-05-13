import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CityModel} from '../models/city.model';

@Injectable()
export class ApiService {
    public static readonly BASE_PATH = 'api/Server';

    constructor(private http: HttpClient) {
    }

    private combineUrl(target: string): string {
        return ApiService.BASE_PATH + '/' + target;
    }

    public accountLogin(userInfo: any) {
        this.http.post(this.combineUrl('Account/Login'), userInfo);
    }

    public citiesAll(): Observable<CityModel[]> {
        return this.http.get<CityModel[]>(this.combineUrl('Cities/All'));
    }

    public citiesAdd(cityName: string): Observable<CityModel> {
       return this.http.post<CityModel>(this.combineUrl('Cities/Add'), cityName);
    }

    public citiesGet(id: number): Observable<CityModel> {
       return this.http.post<CityModel>(this.combineUrl('Cities/Get'), id);
    }
}
