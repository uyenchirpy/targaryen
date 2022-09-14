import { Injectable } from '@angular/core';
import { Member } from './member';
import { MEMBERS } from './mock-member';

@Injectable({
  providedIn: 'root'
})
export class DragonService {

  constructor() { }

  getMembers(): Member[] {
    return MEMBERS
  }
}
