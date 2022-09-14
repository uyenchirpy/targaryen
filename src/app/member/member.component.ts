import { Member } from './../member';
import { Component, OnInit } from '@angular/core';
import { MEMBERS } from "../mock-member";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  members = MEMBERS;
  selectedMember?: Member;

  constructor() { }

  ngOnInit(): void {
  }


  onSelect(member: Member): void {
    this.selectedMember = member;
  }

}
