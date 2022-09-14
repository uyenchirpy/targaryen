import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../member';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
  @Input() member?: Member;

  constructor() { }

  ngOnInit(): void {
  }

}
