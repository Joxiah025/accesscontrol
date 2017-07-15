import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { QRScanner } from '@ionic-native/qr-scanner';
import { PhotoViewer } from '@ionic-native/photo-viewer';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DisplayPage } from '../pages/display/display';
import { RegisteredProvider } from '../providers/registered/registered';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DisplayPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DisplayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    PhotoViewer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RegisteredProvider
  ]
})
export class AppModule {}
