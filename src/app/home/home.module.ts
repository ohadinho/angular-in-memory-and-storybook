import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {routing} from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    routing
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
