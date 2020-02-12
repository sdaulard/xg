import { Injectable, OnInit } from '@angular/core';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { log } from 'util';

interface ContextType {
  routerContextLink: Array <string>;
  routerContextLinkLabel: Array <string>;
  onContextLink: Map<string, ( link: string, context: ContextType) => void >;
  currentContext: string  ;
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
  routerContextLink: Array <string>;
  routerContextLinkLabel: Array <string>;
  onContextLink: Map<string, ( link: string, context: ContextType) => void >;
  currentContext: string  ;
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

    this.NavLinks.currentContext = 'Home';
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
    this.NavLinks.onActionLink.set('Home', this.onLoginContext);
    this.NavLinks.onActionLink.set('Login', this.onLoginContext);
    this.NavLinks.onActionLink.set('DashBoard', this.onDashBoardContext);
    this.NavLinks.onActionLink.set('Clients', this.onClientsContext);
    this.NavLinks.onActionLink.set('Produit', this.onProduitContext);
    this.NavLinks.onActionLink.set('Produits', this.onProduitsContext);
    this.NavLinks.onActionLink.set('Client', this.onClientContext);
    this.NavLinks.onActionLink.set('Centre', this.onCentreContext);

    this.NavLinks.onContextLink = new Map<string, (para: string) => void> ();


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

  onLoginContext(onLink: string, contextRef: ContextType)     {
    switch (onLink) {
      case '': {
        // cas exception quand le login a réussi
        contextRef.currentContext = 'DashBoard';
        contextRef.routerActionLinkLabel[0] = 'Clients';
        contextRef.routerActionLink[0] = 'clients';
        contextRef.routerActionLinkLabel[1] = 'Produits';
        contextRef.routerActionLink[1] = 'produits';
        break;
      }

      case 'auth': {
        switch (contextRef.currentContext) {
          case 'Home': {
              contextRef.currentContext = 'Login';
              contextRef.routerActionLinkLabel[0] = '';
              contextRef.routerActionLink[0] = '';
              break;
          }

          case 'Login': {
            contextRef.currentContext = 'DashBoard';
            contextRef.routerActionLinkLabel[0] = 'Clients';
            contextRef.routerActionLink[0] = 'clients';
            contextRef.routerActionLinkLabel[1] = 'Produits';
            contextRef.routerActionLink[1] = 'produits';
            break;
          }

          default:
              break;
        }
        break;
      }

      default: {
        break;
      }
    }
  }

  onDashBoardContext(onLink: string, contextRef: ContextType)     {
    switch (onLink) {
      case 'clients': {
        contextRef.currentContext = 'Clients';
        contextRef.routerActionLinkLabel[0] = 'Centre';
        contextRef.routerActionLink[0] = 'centre';
        contextRef.routerActionLinkLabel[1] = 'Prog Intervention';
        contextRef.routerActionLink[1] = 'proginterv';

        contextRef.routerContextLinkLabel[0] = 'DashBoard';
        contextRef.routerContextLink[0] = 'dashboard';
        contextRef.routerContextLinkLabel[2] = 'Client MFRA';
        contextRef.routerContextLink[2] = 'client';
        break;
      }

      case 'produits': {
        contextRef.currentContext = 'Produits';
        contextRef.routerActionLinkLabel[0] = 'Produit';
        contextRef.routerActionLink[0] = 'produit';
        contextRef.routerActionLinkLabel[1] = 'Prog Intervention';
        contextRef.routerActionLink[1] = 'proginterv';

        contextRef.routerContextLinkLabel[0] = 'DashBoard';
        contextRef.routerContextLink[0] = 'dashboard';
        // sauter un indice réserve un saut de ligne blanche
        break;
      }

      case 'produit': {
        contextRef.currentContext = 'Produit';
        contextRef.routerActionLinkLabel[0] = 'LogEvent';
        contextRef.routerActionLink[0] = 'logevent';
        contextRef.routerActionLinkLabel[1] = 'prog intervention';
        contextRef.routerActionLink[1] = 'proginterv';

        contextRef.routerContextLinkLabel[0] = 'DashBoard';
        contextRef.routerContextLink[0] = 'dashboard';
        contextRef.routerContextLinkLabel[3] = 'Centre A';
        contextRef.routerContextLink[3] = 'centre';
        contextRef.routerContextLinkLabel[4] = 'Produits du centre';
        contextRef.routerContextLink[4] = 'produit';
        contextRef.routerContextLinkLabel[5] = 'Produit Y du centre';
        contextRef.routerContextLink[5] = 'produit';
        break;
      }

      case 'centre': {
        contextRef.currentContext = 'Centre';
        contextRef.routerActionLinkLabel[0] = 'Produit';
        contextRef.routerActionLink[0] = 'produit';
        contextRef.routerActionLinkLabel[1] = 'Prog Intervention';
        contextRef.routerActionLink[1] = 'proginterv';

        contextRef.routerContextLinkLabel[0] = 'DashBoard';
        contextRef.routerContextLink[0] = 'dashboard';
        contextRef.routerContextLinkLabel[3] = 'Centre A';
        contextRef.routerContextLink[3] = 'centre';
        contextRef.routerContextLinkLabel[4] = 'Produits du centre';
        contextRef.routerContextLink[4] = 'produit';
        break;
      }


      default:
          break;
      }
  }


  onClientsContext(onLink: string, contextRef: ContextType)     {
    switch (onLink) {
      case 'centre': {
              contextRef.currentContext = 'Centre';
              contextRef.routerActionLinkLabel[0] = 'Produit';
              contextRef.routerActionLink[0] = 'produit';
              contextRef.routerActionLinkLabel[1] = 'Prog Intervention';
              contextRef.routerActionLink[1] = 'proginterv';

              contextRef.routerContextLinkLabel[0] = 'DashBoard';
              contextRef.routerContextLink[0] = 'dashboard';
              contextRef.routerContextLinkLabel[3] = 'Centre A';
              contextRef.routerContextLink[3] = 'centre';
              contextRef.routerContextLinkLabel[4] = 'Produits du centre';
              contextRef.routerContextLink[4] = 'produit';
              break;
      }

      default: {
        break;
      }
    }
  }

  onCentreContext(onLink: string, contextRef: ContextType)     {
    switch (onLink) {
      case 'produit': {
              contextRef.currentContext = 'Produit';
              contextRef.routerActionLinkLabel[0] = 'LogEvent';
              contextRef.routerActionLink[0] = 'logevent';
              contextRef.routerActionLinkLabel[1] = 'Prog Intervention';
              contextRef.routerActionLink[1] = 'proginterv';

              contextRef.routerContextLinkLabel[0] = 'DashBoard';
              contextRef.routerContextLink[0] = 'dashboard';
              contextRef.routerContextLinkLabel[3] = 'Centre A';
              contextRef.routerContextLink[3] = 'centre';
              contextRef.routerContextLinkLabel[4] = 'Produits du centre';
              contextRef.routerContextLink[4] = 'produit';
              contextRef.routerContextLinkLabel[5] = 'Produit Y du centre';
              contextRef.routerContextLink[5] = 'produit';
                    break;
      }

      case 'dashboard': {
        contextRef.currentContext = 'DashBoard';
        contextRef.routerActionLinkLabel[0] = 'Clients';
        contextRef.routerActionLink[0] = 'clients';
        contextRef.routerActionLinkLabel[1] = 'Produits';
        contextRef.routerActionLink[1] = 'produits';

        contextRef.routerContextLinkLabel[0] = 'DashBoard';
        contextRef.routerContextLink[0] = 'dashboard';
        contextRef.routerContextLinkLabel[3] = 'Centre A';
        contextRef.routerContextLink[3] = 'centre';
        contextRef.routerContextLinkLabel[4] = 'Produits du centre';
        contextRef.routerContextLink[4] = 'produit';
        contextRef.routerContextLinkLabel[5] = 'Produit Y du centre';
        contextRef.routerContextLink[5] = 'produit';
        break;
      }


      default:
          break;
    }
  }

  onProduitContext(onLink: string, contextRef: ContextType)     {
    switch (onLink) {
      case 'produit': {
        contextRef.currentContext = 'Produit';
        contextRef.routerActionLinkLabel[0] = 'LogEvent';
        contextRef.routerActionLink[0] = 'logevent';
        contextRef.routerActionLinkLabel[1] = 'prog intervention';
        contextRef.routerActionLink[1] = 'proginterv';

        contextRef.routerContextLinkLabel[0] = 'DashBoard';
        contextRef.routerContextLink[0] = 'dashboard';
        contextRef.routerContextLinkLabel[3] = 'Centre A';
        contextRef.routerContextLink[3] = 'centre';
        contextRef.routerContextLinkLabel[4] = 'Produits du centre';
        contextRef.routerContextLink[4] = 'produit';
        contextRef.routerContextLinkLabel[5] = 'Produit Y du centre';
        contextRef.routerContextLink[5] = 'produit';
        break;
      }

      case 'dashboard': {
        contextRef.currentContext = 'DashBoard';
        contextRef.routerActionLinkLabel[0] = 'Clients';
        contextRef.routerActionLink[0] = 'clients';
        contextRef.routerActionLinkLabel[1] = 'Produits';
        contextRef.routerActionLink[1] = 'produits';

        contextRef.routerContextLinkLabel[0] = 'DashBoard';
        contextRef.routerContextLink[0] = 'dashboard';
        contextRef.routerContextLinkLabel[3] = 'Centre A';
        contextRef.routerContextLink[3] = 'centre';
        contextRef.routerContextLinkLabel[4] = 'Produits du centre';
        contextRef.routerContextLink[4] = 'produit';
        contextRef.routerContextLinkLabel[5] = 'Produit Y du centre';
        contextRef.routerContextLink[5] = 'produit';
        break;
      }

      default: {
        break;
      }
    }
  }




  onProduitsContext(onLink: string, contextRef: ContextType)     {
    switch (onLink) {
      case 'produit': {
        contextRef.currentContext = 'Produit';
        contextRef.routerActionLinkLabel[0] = 'LogEvent';
        contextRef.routerActionLink[0] = 'logevent';
        contextRef.routerActionLinkLabel[1] = 'Prog Intervention';
        contextRef.routerActionLink[1] = 'proginterv';

        contextRef.routerContextLinkLabel[0] = 'DashBoard';
        contextRef.routerContextLink[0] = 'dashboard';
        contextRef.routerContextLinkLabel[3] = 'Centre A';
        contextRef.routerContextLink[3] = 'centre';
        contextRef.routerContextLinkLabel[4] = 'Produits du centre';
        contextRef.routerContextLink[4] = 'produit';
        contextRef.routerContextLinkLabel[5] = 'Produit X du centre';
        contextRef.routerContextLink[5] = 'produit';
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
        this.onLoginContext('', this.NavLinks);
      } else {
        this.NavLinks.onActionLink.get(this.NavLinks.currentContext)
                            (this.NavLinks.routerActionLink[linkId - 1], this.NavLinks);
      }
    }
  }

  onContextLink(linkId: number) {
    if (linkId >= 1 && linkId <= 8) {
      if (this.NavLinks.routerContextLinkLabel[linkId - 1] === '') {
        this.onLoginContext('', this.NavLinks);
      } else {
        this.NavLinks.onActionLink.get(this.NavLinks.currentContext)
                            (this.NavLinks.routerContextLink[linkId - 1], this.NavLinks);
      }
    }
  }

  ngOnInit() {  }
}


