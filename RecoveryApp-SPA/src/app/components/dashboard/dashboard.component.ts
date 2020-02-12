import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})


export class DashBoardComponent {

  authStatus: boolean;

  constructor(private router: Router) { }

}
