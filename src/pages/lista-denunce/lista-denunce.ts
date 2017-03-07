import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation, NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from 'ionic-native';
/*
  Generated class for the ListaDenunce page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lista-denunce',
  templateUrl: 'lista-denunce.html'
})
export class ListaDenuncePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaDenuncePage');
    this.getPosition();
  }

  getPosition(){
    Geolocation.getCurrentPosition().then((position)=> {

      alert(position);

      let req = {
        position: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      }

      NativeGeocoder.reverseGeocode(req.position.lat, req.position.lng)
        .then((result:NativeGeocoderReverseResult) => {

           alert("The address is " + result.city + " , " + result.postalCode + " , "
           + result.street  + " in " + result.countryName);

       //   this.getNearbyPlaces({
       //     lat: position.coords.latitude,
            //lat: 41.9092973,
      //      lng: position.coords.longitude
      //      //lng: 12.545706
      //    });
      //
        })
        .catch((error:any) => console.log(error));

    }, (err)=> {
      alert(err);
    });
  }

}
