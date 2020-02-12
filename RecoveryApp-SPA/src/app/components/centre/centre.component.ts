import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-client',
    templateUrl: './centre.component.html',
    styleUrls: ['./centre.component.scss']
})


export class CentreComponent {

  authStatus: boolean;

  constructor(private router: Router) { }

}
