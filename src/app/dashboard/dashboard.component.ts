import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { DragonService } from '../dragon.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  members: Member[] = [];

  constructor(private dragonService: DragonService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.dragonService.getAllDragons()
      .subscribe(mem => this.members = mem.slice(1, 5));
  }
}
