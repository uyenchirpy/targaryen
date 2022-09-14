import { DragonService } from './../dragon.service';
import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../member';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css'],
})
export class MemberDetailsComponent implements OnInit {
  @Input() member?: Member;

  constructor(
    private dragonService: DragonService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getDragons();
  }

  getDragons(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dragonService.getDragon(id).subscribe(member => this.member = member)
  }

  goBack(): void {
    this.location.back();
  }

}
