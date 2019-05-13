import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders, NgModule} from '@angular/core';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);


