import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'adrien-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() active: number = 0;

  mobileMenuDisplay: boolean = false;
  activeClass: Array<string> = ['', '', '', '', ''];

  constructor() { }

  ngOnInit(): void {
    this.activeClass[this.active] = 'active';
  }

  toggleMobileMenu() {
    this.mobileMenuDisplay = !this.mobileMenuDisplay;
  }

}
