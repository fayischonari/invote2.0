import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  newVoter: BehaviorSubject<any> = new BehaviorSubject({});
  voterCount: BehaviorSubject<number> = new BehaviorSubject(0)
  constructor() { }
}
