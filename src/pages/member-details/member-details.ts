import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormsModule } from '@angular/forms'; 

import { MemberService } from './member-service';

/**
 * Generated class for the MemberDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-member-details',
  templateUrl: 'member-details.html',
})
export class MemberDetailsPage {

  member: any

  constructor(public navCtrl: NavController, public navParams: NavParams, private memberService: MemberService) {
    //this.name = memberService.selected.name

  }

  ngOnInit() {
    this.memberService.currentMember.subscribe(member => this.member = member)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberDetailsPage');
  }

  save() {
    console.log(this.member);
  }

  cancel() {
    this.navCtrl.pop();
  }

}
