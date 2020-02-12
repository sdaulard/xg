import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss']
})


export class ClientComponent {

  authStatus: boolean;

  constructor(private router: Router) { }

}
