import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MemberService {

  private memberSource = new BehaviorSubject("");
  currentMember = this.memberSource.asObservable();

  constructor() {
    console.log('Hello MemberService');
  }

  setMember(member: any) {
    this.memberSource.next(member);
  }

}
