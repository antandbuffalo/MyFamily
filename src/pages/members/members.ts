import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MainProvider } from '../../providers/main/main';
import { MemberDetailsPage } from '../member-details/member-details';
import { MemberService } from '../member-details/member-service';

/**
 * Generated class for the MembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-members',
  templateUrl: 'members.html',
})
export class MembersPage {
  members: String[];
  errorMessage: String;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public mainProvider: MainProvider, private memberService: MemberService) {
  }

  getMembers() {
    this.mainProvider.getMembers()
       .subscribe(
         members => this.members = members,
         error =>  this.errorMessage = <any>error);
  }

  itemSelected(selected) {
    console.log(selected);
    this.memberService.setMember(selected);
    this.navCtrl.push(MemberDetailsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembersPage');
    this.getMembers();
  }

}
