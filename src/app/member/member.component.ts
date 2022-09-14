import { DragonService } from './../dragon.service';
import { Member } from './../member';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  members: Member[] = [];
  selectedMember?: Member;

  constructor(
    private dragonService: DragonService
  ) { }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.members = this.dragonService.getMembers();
  }

  onSelect(member: Member): void {
    this.selectedMember = member;
  }

}
