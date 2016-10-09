import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Weather page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html'
})
export class Weather {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Weather Page');
  }

}
