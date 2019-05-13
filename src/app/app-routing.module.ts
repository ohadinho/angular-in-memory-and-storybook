import {ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ {
  path: '',
  loadChildren: './home/home.module#HomeModule'
}];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, {});
