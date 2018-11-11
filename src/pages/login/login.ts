import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: String;
  password: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.username = "a"
    this.password = "a"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.navCtrl.setRoot(HomePage);
  }

  login() {
    if(this.username === "jeyabalaji" && this.password === "12121988" || true) {
      //this.navCtrl.push(HomePage);
      this.navCtrl.setRoot(HomePage);
    }    
  }
}
