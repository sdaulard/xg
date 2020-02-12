import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { MessageService } from '../../_services/Message.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})



export class AuthComponent implements OnInit {

  authStatus: boolean;

  constructor(private authService: AuthService,
              private router: Router,
              private messageService: MessageService ) {


  }



  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn() {
    this.authService.signIn().then(
      () => {
        console.log('Sign in successful!');
        this.authStatus = this.authService.isAuth;

        // exceptionnel: générer un pseudo événement clic sur barre navigation pour la mettre à jour
        // pas de bouton dans la barre en arrivant sur DashBoard, mais ceci va permettre de faire apparaître
        // les choix Clients et Produits
        this.router.navigate(['dashboard']);
        this.messageService.sendMessage('Message from Auth Component to NavMenu Component!');
      }
    );
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }
}
