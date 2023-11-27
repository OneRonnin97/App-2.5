
import { Component,ViewChild, ElementRef  } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, Marker, LatLng } from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  handleChange(e) {
    console.log('Estacionamiento selecionado ' + e.detail.value);
  }
  handleCancel() {
    console.log('Operacion cancelada');
  }
  handleDismiss() {
    console.log('Operacion abortada');
  }
  
  @ViewChild('map', { static: true }) mapElement: ElementRef;
  map: GoogleMap;

  constructor(public toastController: ToastController,  ) {}

  

  ngOnInit() {
    this.initMap();
 }

 initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -33.024452210, lng: -71.551765440},
    zoom: 15
  });
  
}





async showToast() {
  const toast = await this.toastController.create({
     message: 'El estacionamiento ha sido reservado',
     duration: 2000
  });
  toast.present();
  }

}
