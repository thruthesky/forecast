import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Addweather} from '../pages/addweather/addweather';
import {Openweather} from '../providers/openweather';
import {Forcast} from '../pages/forcast/forcast';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Addweather,
    Forcast
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Addweather,
    Forcast
  ],
  providers: [Openweather]
})
export class AppModule {}
