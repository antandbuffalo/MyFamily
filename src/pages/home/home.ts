import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainProvider } from '../../providers/main/main';
import { Member } from '../../models/member';
import { MembersPage } from '../members/members';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  members: Member [];
  errorMessage: String;
  livingMembers = 0;
  totalMembers = 0;
  constructor(public navCtrl: NavController, private mainProvider: MainProvider) {

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
            this.getTotalLivingMembers();
          },
          error =>  this.errorMessage = <any>error);
  }
  itemSelected(selected) {
    this.navCtrl.push(MembersPage);
  }
  getTotalLivingMembers() {
    var total = 0;
    for(let i=0; i < this.members.length; i++) {
      if(this.members[i].living) {
        total++;
      }
    }
    this.livingMembers = total;
    this.totalMembers = this.members.length;
  }
}
