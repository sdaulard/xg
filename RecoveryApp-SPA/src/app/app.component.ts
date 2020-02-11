import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  // déclaration de variable globale

  constructor() { }


  @Input() routerlink: string;
  @Input() linkname: string;

  navLinks = [
    {
      id: 1,
      routerLink: '/auth',
      linkName: 'Login'
    },
    {
      id: 2,
      routerLink: '/appareils',
      linkName: 'Appareils'
    },
    {
      id: 3,
      routerLink: '/',
      linkName: 'DashBoard'
    }
  ];
}
