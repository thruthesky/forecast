import { Component } from '@angular/core';

import { NavController, ModalController, NavParams} from 'ionic-angular';
import {Addweather} from '../addweather/addweather';
import {Openweather} from '../../providers/openweather';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Forcast} from '../forcast/forcast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather1 : [];
  weatherList = [];
  constructor(public navCtrl: NavController,public navParams: NavParams,
     public modalCtrl : ModalController, public weather : Openweather) {

  }
  onClick() {
     let m = this.modalCtrl.create(Addweather);
     m.onDismiss( (data) => {
       this.getWeather(data.city, data.country);
     })
     m.present();
     console.log(this.weatherList);
  }

  viewForcast(event,weatherList){
    this.navCtrl.push(Forcast, {
      weather1: weatherList

    });
  }

  getWeather( city: string, country:string ) {
    this.weather.getWeatherByCity(city, country )
    .map( data => data.json() )
    .subscribe(
      data=> {
        this.weatherList.push(data);
      });
    }
  }
