import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MembersPage } from '../members/members';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  members: String [];
  errorMessage: String;
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
  }

  itemSelected(selected) {
    this.navCtrl.push(MembersPage);
  }

}
