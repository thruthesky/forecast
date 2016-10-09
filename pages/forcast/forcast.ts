import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Openweather} from '../../providers/openweather';

@Component({
  selector: 'page-forcast',
  templateUrl: 'forcast.html'
})
export class Forcast {
  weatherList = [];
  //items: any;

  weatherList_original: any;
  constructor(public navCtrl: NavController,public navParams: NavParams,
  public weather : Openweather) {
    //let items=navParams.get('weather1');
    this.weatherList.push(navParams.get('weather1'));
    this.weather.getForcastById(weatherList.id).subscribe(
    response => {
      this.weatherList=this.weatherList_original=response.json();
    }
    );

  }

}
