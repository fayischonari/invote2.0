import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('headerMenu') headerMenu!: ElementRef

  ngOnInit() {

  }

  menuClick(event: any) {
    console.log(this.headerMenu.nativeElement);
    this.headerMenu.nativeElement.classList.toggle('change')
  }
}
