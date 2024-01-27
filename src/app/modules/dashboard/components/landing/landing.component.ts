import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  constructor(private router: Router) {}

  cardClick(type: string) {
    if (type === 'voterList') this.router.navigate(['voter-list']);
    if (type === 'voterAdd') this.router.navigate(['voter-add']);
    if (type === 'events') this.router.navigate(['events']);
  }

}
