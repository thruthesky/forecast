import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the Openweather provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Openweather {
  appId = 'e87ab490ad1d41011cbb71ccac307568';
  baseURL = 'http://api.openweathermap.org/data/2.5/'

  constructor(public http: Http) {
    console.log('Hello Openweather Provider');
  }
  getWeatherByCity( city: string, country: string ) {
      let url = this.baseURL + 'weather';
      url += '?appId=' + this.appId;
      url += '&q=' + city + ',' + country;
      return this.http.get(url);
    }

    getForcastById(id: string){
      let url= this.baseURL + 'forecast/daily?';
      url += 'id='+ id;
      url += '&appid=' + this.appId;
      url += '&cnt=7&units=metric';
      return this.http.get(url);
    }

}
