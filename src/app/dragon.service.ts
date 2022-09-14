import { Injectable } from '@angular/core';
import { Member } from './member';
import { MEMBERS } from './mock-member';
import { Observable, of } from 'rxjs';
import { MessageService } from "./message.service"

@Injectable({
  providedIn: 'root'
})
export class DragonService {

  constructor(private messageService: MessageService) { }

  getAllDragons(): Observable<Member[]> {
    const members = of(MEMBERS);
    this.messageService.add("DragonService: Fetch Dragon Member")
    return members;
  }

  getDragon(id: number): Observable<Member> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const member = MEMBERS.find(m => m.id === id)!;
    this.messageService.add(`DragonService: fetched dragon with id=${id}`);
    return of(member);
  }
}
