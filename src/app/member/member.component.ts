import { DragonService } from './../dragon.service';
import { MessageService } from '../message.service';
import { Member } from './../member';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  members: Member[] = [];

  constructor(
    private dragonService: DragonService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.dragonService.getAllDragons().subscribe( members => this.members = members)
  }

}
