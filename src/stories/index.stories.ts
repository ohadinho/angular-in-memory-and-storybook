import {moduleMetadata, storiesOf} from '@storybook/angular';
import {AppComponent} from '../app/app.component';
import {FormsModule} from '@angular/forms';
import {ApiService} from '../app/api/api.service';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {ApiServiceMock} from './api.service.mock';

storiesOf('AppComponent', module)
  .addDecorator(
    moduleMetadata({
      imports: [FormsModule, HttpClientModule],
      providers: [ApiService]
    }),
  )
  .add('with service mock', () => ({
    component: AppComponent,
    props: {
      apiService: new ApiServiceMock()
    }
  }));
