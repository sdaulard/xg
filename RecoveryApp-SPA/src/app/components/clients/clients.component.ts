import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss']
})


export class ClientsComponent {

  authStatus: boolean;

  constructor(private router: Router) { }

}
