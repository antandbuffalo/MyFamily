import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainProvider } from '../../providers/main/main';
import { Member } from '../../models/member';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  members: Member [];
  errorMessage: String;
  constructor(public navCtrl: NavController, public mainProvider: MainProvider) {

  }

  ionViewDidLoad() {
    this.getMembers();
  }

  getMembers() {
    this.mainProvider.getMembers()
       .subscribe(
          members => {
            console.log(members.members);
            this.members = members.members;
          },
          error =>  this.errorMessage = <any>error);
  }

  items = ["Jeyaba", "asdf"];

}
