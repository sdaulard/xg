import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-produits',
    templateUrl: './produits.component.html',
    styleUrls: ['./produits.component.scss']
})


export class ProduitsComponent {

  authStatus: boolean;

  constructor(private router: Router) { }

}
