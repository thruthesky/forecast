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
  
  constructor(public navCtrl: NavController,public navParams: NavParams,
  public weather : Openweather) {
    //let items=navParams.get('weather1');
    this.weatherList.push(navParams.get('weather1'));
    console.log( 'Forcast::constructor()', this.weatherList );
    
    this.weather.getForcastById(this.weatherList[0].id)
      .map( e => e.json() )
      .subscribe( re => {
        console.log( re );
        this.weatherList = re;
      } );

  }

}
