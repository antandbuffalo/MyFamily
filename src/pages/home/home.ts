import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainProvider } from '../../providers/main/main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  members: String [];
  errorMessage: String;
  constructor(public navCtrl: NavController, public mainProvider: MainProvider) {

  }

  ionViewDidLoad() {
    this.getMembers();
  }

  getMembers() {
    this.mainProvider.getMembers()
       .subscribe(
         members => this.members = members,
         error =>  this.errorMessage = <any>error);
  }

  items = ["Jeyaba", "asdf"];

}
