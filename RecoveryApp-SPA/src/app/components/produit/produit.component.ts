import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-produit',
    templateUrl: './produit.component.html',
    styleUrls: ['./produit.component.scss']
})


export class ProduitComponent {

  authStatus: boolean;

  constructor(private router: Router) { }

}
