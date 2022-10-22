import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adrien-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  mobileMenuDisplay: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMobileMenu() {
    this.mobileMenuDisplay = !this.mobileMenuDisplay;
  }

}
