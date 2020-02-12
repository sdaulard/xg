import { Injectable, OnInit } from '@angular/core';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { log } from 'util';

interface ContextType {
  selectedContext: string  ;
  routerContextLink: Array <string>;
  routerContextLinkLabel: Array <string>;
  onContextLink: Map<string, ( link: string, context: ContextType) => void >;
  selectedAction: string  ;
  routerActionLink: Array <string>;
  routerActionLinkLabel: Array <string>;
  onActionLink: Map<string, ( link: string, context: ContextType) => void >;
}


function onHomeState(onLink: string) {
  switch (onLink) {
    case 'home': {
      this.NavLinks.selectedContext = 'login';
      // this.NavLinks.onlinkEvent = onLoginState;
      break;
    }
    case 'login': {
      this.NavLinks.selectedContext = 'DashBoard';
      // this.NavLinks.onlinkEvent = onLoginState;
      break;
    }

    default: {
      break;
    }

  }
}


@Injectable()
export class NavLinks {
  selectedContext: string  ;
  routerContextLink: Array <string>;
  routerContextLinkLabel: Array <string>;
  onContextLink: Map<string, ( link: string, context: ContextType) => void >;
  selectedAction: string  ;
  routerActionLink: Array <string>;
  routerActionLinkLabel: Array <string>;
  onActionLink: Map<string, ( link: string, context: ContextType) => void >;
}

export class NavLinkService implements OnInit {

  NavLinks: ContextType;

  constructor() {
    this.NavLinks = new NavLinks();

    this.NavLinks.routerContextLinkLabel = new Array(8);
    this.NavLinks.routerContextLink = new Array(8);

    this.NavLinks.routerActionLinkLabel = new Array(8);
    this.NavLinks.routerActionLink = new Array(8);

    this.NavLinks.selectedAction = 'Home';
    this.NavLinks.routerActionLinkLabel[0] = 'Login';
    this.NavLinks.routerActionLinkLabel[1] = '';
    this.NavLinks.routerActionLinkLabel[2] = '';
    this.NavLinks.routerActionLinkLabel[3] = '';
    this.NavLinks.routerActionLinkLabel[4] = '';
    this.NavLinks.routerActionLinkLabel[5] = '';
    this.NavLinks.routerActionLinkLabel[6] = '';
    this.NavLinks.routerActionLinkLabel[7] = '';

    this.NavLinks.routerActionLink[0] = 'auth';
    this.NavLinks.routerActionLink[1] = '';
    this.NavLinks.routerActionLink[2] = '';
    this.NavLinks.routerActionLink[3] = '';
    this.NavLinks.routerActionLink[4] = '';
    this.NavLinks.routerActionLink[5] = '';
    this.NavLinks.routerActionLink[6] = '';
    this.NavLinks.routerActionLink[7] = '';

    this.NavLinks.onActionLink = new Map<string, (para: string) => void> ();
    this.NavLinks.onActionLink.set('Home', this.onLoginAction);
    this.NavLinks.onActionLink.set('Login', this.onLoginAction);
    this.NavLinks.onActionLink.set('DashBoard', this.onDashBoardAction);
    this.NavLinks.onActionLink.set('Clients', this.onClientsAction);
    this.NavLinks.onActionLink.set('Produits', this.onProduitsAction);

    this.NavLinks.onContextLink = new Map<string, (para: string) => void> ();


    this.NavLinks.selectedContext = '';
    this.NavLinks.routerContextLinkLabel[0] = '';
    this.NavLinks.routerContextLinkLabel[1] = '';
    this.NavLinks.routerContextLinkLabel[2] = '';
    this.NavLinks.routerContextLinkLabel[3] = '';
    this.NavLinks.routerContextLinkLabel[4] = '';
    this.NavLinks.routerContextLinkLabel[5] = '';
    this.NavLinks.routerContextLinkLabel[6] = '';
    this.NavLinks.routerContextLinkLabel[7] = '';

    this.NavLinks.routerContextLink[0] = 'auth';
    this.NavLinks.routerContextLink[1] = '';
    this.NavLinks.routerContextLink[2] = '';
    this.NavLinks.routerContextLink[3] = '';
    this.NavLinks.routerContextLink[4] = '';
    this.NavLinks.routerContextLink[5] = '';
    this.NavLinks.routerContextLink[6] = '';
    this.NavLinks.routerContextLink[7] = '';
  }

  onLoginAction(onLink: string, contextRef: ContextType)     {
    switch (onLink) {
      case '': {
        // cas exception quand le login a réussi
        contextRef.selectedAction = 'DashBoard';
        contextRef.routerActionLinkLabel[0] = 'Clients';
        contextRef.routerActionLink[0] = '/clients';
        contextRef.routerActionLinkLabel[1] = 'Produits';
        contextRef.routerActionLink[1] = '/produits';
        break;
      }

      case 'Login': {

        switch (contextRef.selectedAction) {
          case 'Home': {
              contextRef.selectedAction = 'Login';
              contextRef.routerActionLinkLabel[0] = '';
              contextRef.routerActionLink[0] = '';
              break;
          }

          case 'Login': {
            contextRef.selectedAction = 'DashBoard';
            contextRef.routerActionLinkLabel[0] = 'Clients';
            contextRef.routerActionLink[0] = '/clients';
            contextRef.routerActionLinkLabel[1] = 'Produits';
            contextRef.routerActionLink[1] = '/produits';
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



  onClientsAction(onLink: string, contextRef: ContextType)     {
    switch (onLink) {
      case 'Clients': {

        switch (contextRef.selectedAction) {
          case 'DashBoard': {
              contextRef.selectedAction = 'Clients';
              contextRef.routerActionLinkLabel[0] = 'Prog Intervention';
              contextRef.routerActionLink[0] = '/proginterv';
              contextRef.routerActionLinkLabel[1] = '';
              contextRef.routerActionLink[1] = '';

              contextRef.routerContextLinkLabel[0] = 'DashBoard';
              contextRef.routerContextLink[0] = '/dashboard';
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

  onDashBoardAction(onLink: string, contextRef: ContextType)     {
    switch (onLink) {
      case 'Clients': {
        contextRef.selectedAction = 'Clients';
        contextRef.routerActionLinkLabel[0] = 'Prog Intervention';
        contextRef.routerActionLink[0] = '/proginterv';
        contextRef.routerActionLinkLabel[1] = '';
        contextRef.routerActionLink[1] = '';

        contextRef.routerContextLinkLabel[0] = 'DashBoard';
        contextRef.routerContextLink[0] = '/dashboard';
        break;
      }

      case 'Produits': {
        contextRef.selectedAction = 'Produits';
        contextRef.routerActionLinkLabel[0] = 'Prog Intervention';
        contextRef.routerActionLink[0] = '/proginterv';
        contextRef.routerActionLinkLabel[1] = '';
        contextRef.routerActionLink[1] = '';

        contextRef.routerContextLinkLabel[0] = 'DashBoard';
        contextRef.routerContextLink[0] = '/dashboard';
        // sauter un indice réserve un saut de ligne blanche
        break;
      }

        default:
            break;
      }
  }


  onProduitsAction(onLink: string, contextRef: ContextType)     {
    switch (onLink) {
      case 'Produits': {

        switch (contextRef.selectedAction) {
          case 'DashBoard': {
              contextRef.selectedAction = 'Produits';
              contextRef.routerActionLinkLabel[0] = 'Prog Intervention';
              contextRef.routerActionLink[0] = '/proginterv';
              contextRef.routerActionLinkLabel[1] = '';
              contextRef.routerActionLink[1] = '';
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
      if (this.NavLinks.routerActionLinkLabel[linkId - 1] === '') {
        this.onLoginAction('', this.NavLinks);
      } else {
        this.NavLinks.onActionLink.get(this.NavLinks.selectedAction)
                            (this.NavLinks.routerActionLinkLabel[linkId - 1], this.NavLinks);
      }
    }
  }

  onContextLink(linkId: number) {
    if (linkId >= 1 && linkId <= 8) {
      if (this.NavLinks.routerContextLinkLabel[linkId - 1] === '') {
        this.onLoginAction('', this.NavLinks);
      } else {
        this.NavLinks.onActionLink.get(this.NavLinks.selectedAction)
                            (this.NavLinks.routerContextLinkLabel[linkId - 1], this.NavLinks);
      }
    }
  }

  ngOnInit() {  }
}


