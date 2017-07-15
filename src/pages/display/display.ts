import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, Platform} from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';
 
/**
 * Generated class for the DisplayPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage {
  
  public info;
  public img;
  public name;
  public chapter;
  public zone;
  public phone;
  public email;
  public event;

  constructor(private photo: PhotoViewer, public navCtrl: NavController, public viewCtrl: ViewController, public platform: Platform, public navParams: NavParams) {
    this.info = this.navParams.data;
    this.img = this.info.pic;
    this.name = this.info.name;
    this.chapter = this.info.chapter;
    this.zone = this.info.zone;
    this.event = this.info.event;
    this.phone = this.info.phone;
    this.email = this.info.email;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayPage');
  }

  photoview(url: string, name: string){
    this.photo.show(url, name, {share: false});
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
