import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {AngularFireModule} from '@angular/fire/compat'
import {AngularFireAuthModule} from '@angular/fire/compat/auth'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import {HttpClientModule} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent,],
  imports: [BrowserModule, 
  IonicModule.forRoot(),
  AppRoutingModule,
  
  HttpClientModule,
  AngularFireModule, 
  AngularFireAuthModule,
  AngularFireModule.initializeApp(environment.firebaseConfig),
  

],
   
  providers: [Geolocation,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy  }],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule {}
