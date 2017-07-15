import { Component } from '@angular/core';
import { NavController, AlertController, ModalController, ToastController, LoadingController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { RegisteredProvider } from '../../providers/registered/registered';
import { DisplayPage } from '../display/display';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public active: boolean = false;
  constructor(public loadingCtrl: LoadingController,public toastCtrl: ToastController, public modalCtrl: ModalController, private alertCtrl: AlertController, public navCtrl: NavController, private qrScanner: QRScanner, private regService: RegisteredProvider) {}

  scan(){
    this.qrScanner.prepare().then((status: QRScannerStatus) => {
      console.log(status);
     if (status.authorized) {
       // camera permission was granted
        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
          let loading = this.loadingCtrl.create({
              content: 'Please wait, Retrieving info...',
              spinner: 'dots'
            });

            loading.present();
          this.regService.getRegistered(text).subscribe(
            (res) =>{
                loading.dismiss();
                 let modal = this.modalCtrl.create(DisplayPage, res);
                modal.present();
              
            },
            (err) => {
              loading.dismiss();
              this.presentToast('Network connection error!');
            }
          );

         this.qrScanner.hide(); // hide camera preview
         scanSub.unsubscribe(); // stop scanning
       });


        // show camera preview
       this.qrScanner.show();

       // wait for user to scan something, then the observable callback will be called

     } else if (status.denied) {
       // camera permission was permanently denied
       // you must use QRScanner.openSettings() method to guide the user to the settings page
       // then they can grant the permission from there
     } else {
       // permission was denied, but not permanently. You can ask for permission again at a later time.
     }
    })
    
  }

presentToast(data: string) {
  let toast = this.toastCtrl.create({
    message: data,
    duration: 3000,
    position: 'top'
  });
  toast.present();
}


presentAlert(data) {
  let alert = this.alertCtrl.create({
    title: 'Return Data',
    subTitle: data,
    buttons: ['Dismiss']
  });
  alert.present();
}

}
