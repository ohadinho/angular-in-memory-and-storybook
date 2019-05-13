import {Component, OnInit} from '@angular/core';
import {ApiService} from './api/api.service';
import {Observable, of} from 'rxjs';
import {CityModel} from './models/city.model';
import {ButtonPressed} from './enums/buttonPressed.enum';
import {HandleCitiesGet} from './handleCitiesActions/handleCitiesGet';
import {HandleCitiesAdd} from './handleCitiesActions/handleCitiesAdd';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // region CitiesAll
  public citiesAllGet$: Observable<CityModel[]>;
  // endregion

  // region AddCity
  public handleCitiesAdd: HandleCitiesAdd;
  // endregion

  // region GetCity
  public handleCitiesGet: HandleCitiesGet;
  // endregion

  // region Template variables
  public buttonPressed = ButtonPressed.None;
  public eButtonPressed = ButtonPressed;
  // endregion

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.citiesAllGet$ = this.onCitiesAllGet();
    this.handleCitiesAdd = new HandleCitiesAdd(this.apiService);
    this.handleCitiesGet = new HandleCitiesGet(this.apiService);
  }

  public onCitiesAllGet(): Observable<CityModel[]> {
    return this.apiService.citiesAll();
  }

  public onCitiesAddPost(): void {
    this.buttonPressed = ButtonPressed.CitiesAdd;
    this.handleCitiesAdd.handle();
  }

  public onCitiesGetPost(): void {
    this.buttonPressed = ButtonPressed.CitiesGet;
    if (this.handleCitiesGet.cityUiContent.city.id === -1) {
      return;
    }

    this.handleCitiesGet.handle();
  }
}
