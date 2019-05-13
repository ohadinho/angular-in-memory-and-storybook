import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {FormsModule} from '@angular/forms';
import {ApiService} from './api/api.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {environment} from '../environments/environment';
import {InMemoryApiService} from './in-memory-api/in-memory-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
    ]),
    FormsModule,
    HttpClientModule,

    environment.useMockServer ? HttpClientInMemoryWebApiModule.forRoot(InMemoryApiService, {
      passThruUnknownUrl: true
    }) : []
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
