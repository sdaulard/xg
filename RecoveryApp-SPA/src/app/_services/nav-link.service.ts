import { Injectable, OnInit } from '@angular/core';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { log } from 'util';

interface ContextType {
  selectedAction: string  ;
  routerLink: Array <string>;
  routerLinkLabel: Array <string>;
  onActionLink: Map<string, ( link: string, context: ContextType) => void >;
}


function onHomeState(onLink: string) {
  switch (onLink) {
    case 'home': {
      this.contextActionLinks.selectedContext = 'login';
      // this.contextActionLinks.onlinkEvent = onLoginState;
      break;
    }
    case 'login': {
      this.contextActionLinks.selectedContext = 'DashBoard';
      // this.contextActionLinks.onlinkEvent = onLoginState;
      break;
    }

    default: {
      break;
    }

  }
}


@Injectable()
export class ContextLinks {
  selectedAction: string  ;
  routerLink: Array <string>;
  routerLinkLabel: Array <string>;
  onActionLink: Map<string, ( link: string, context: ContextType) => void >;
}


export class NavLinkService implements OnInit {

  actionLinks: any;
  contextActionLinks: {
    selectedAction: string  ;
    routerLink: Array <string>;
    routerLinkLabel: Array <string>;
    onActionLink: Map<string, ( link: string, context: ContextType) => void >};

  constructor() {
    this.contextActionLinks = new ContextLinks();

    this.contextActionLinks.routerLinkLabel = new Array(8);
    this.contextActionLinks.routerLink = new Array(8);

    this.contextActionLinks.selectedAction = 'Home';
    this.contextActionLinks.routerLinkLabel[0] = 'Login';
    this.contextActionLinks.routerLinkLabel[1] = '';
    this.contextActionLinks.routerLinkLabel[2] = '';
    this.contextActionLinks.routerLinkLabel[3] = '';
    this.contextActionLinks.routerLinkLabel[4] = '';
    this.contextActionLinks.routerLinkLabel[5] = '';
    this.contextActionLinks.routerLinkLabel[6] = '';
    this.contextActionLinks.routerLinkLabel[7] = '';

    this.contextActionLinks.routerLink[0] = 'auth';
    this.contextActionLinks.routerLink[1] = '';
    this.contextActionLinks.routerLink[2] = '';
    this.contextActionLinks.routerLink[3] = '';
    this.contextActionLinks.routerLink[4] = '';
    this.contextActionLinks.routerLink[5] = '';
    this.contextActionLinks.routerLink[6] = '';
    this.contextActionLinks.routerLink[7] = '';

    this.contextActionLinks.onActionLink = new Map<string, (para: string) => void> ();
    this.contextActionLinks.onActionLink.set('Home', this.onLoginAction);
    this.contextActionLinks.onActionLink.set('Login', this.onLoginAction);
  }

  onLoginAction(onLink: string, contextRef: ContextType)     {
    switch (onLink) {
      case '': {
        // cas exception quand le login a réussi
        contextRef.selectedAction = 'DashBoard';
        contextRef.routerLinkLabel[0] = 'Clients';
        contextRef.routerLink[0] = '/clients';
        contextRef.routerLinkLabel[1] = 'Produits';
        contextRef.routerLink[1] = '/produits';
        break;
      }

      case 'Login': {

        switch (contextRef.selectedAction) {
          case 'Home': {
              contextRef.selectedAction = 'Login';
              contextRef.routerLinkLabel[0] = '';
              contextRef.routerLink[0] = '';
              break;
          }

          case 'Login': {
            contextRef.selectedAction = 'DashBoard';
            contextRef.routerLinkLabel[0] = 'Clients';
            contextRef.routerLink[0] = '/clients';
            contextRef.routerLinkLabel[1] = 'Produits';
            contextRef.routerLink[1] = '/produits';
            break;
          }

          default:
              break;
        }
        break;
      }

      case 'login': {
        // rien à faire, on y est déjà
        break;
      }

      default: {
        break;
      }
    }
  }

  onActionLink(linkId: number) {
    if (linkId >= 1 && linkId <= 8) {
      if (this.contextActionLinks.routerLinkLabel[linkId - 1] === '') {
        this.onLoginAction('', this.contextActionLinks);
      } else {
        this.contextActionLinks.onActionLink.get(this.contextActionLinks.selectedAction)
                            (this.contextActionLinks.routerLinkLabel[linkId - 1], this.contextActionLinks);
      }
    }
  }


  ngOnInit() {
    this.actionLinks = [
      {
        id: 1,
        linkName: '',
        linkRoute: ''
      }
    ];

  }
}


