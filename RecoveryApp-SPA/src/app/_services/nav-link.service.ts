import { Injectable, OnInit } from '@angular/core';


function onHomeState(onLink: string) {
  switch (onLink) {
    case 'home': {
      this.contextActionLinks.selectedContext = 'login';
      this.contextActionLinks.onlinkEvent = onLoginState;
      window.open('https:/localhost:4200/appareils', '_blank');
      break;
    }
    case 'login': {
      this.contextActionLinks.selectedContext = 'DashBoard';
      this.contextActionLinks.onlinkEvent = onLoginState;
      break;
    }

    default: {
      break;
    }

  }
}

function onLoginState(onLink: string) {
  switch (onLink) {
    case 'home': {
      this.contextActionLinks.selectedContext = 'login';
      this.contextActionLinks.onlinkEvent = onLoginState;
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


@Injectable()
export class ContextLinks {
  selectedContext: string  ;
  routerLinkLabel: string[];
  oncontextLink: Map<string, () => void >;
}


export class NavLinkService implements OnInit {

  constructor() {
    this.contextActionLinks = new ContextLinks();

    this.contextActionLinks.routerLinkLabel = new Array(8);
    this.contextActionLinks.routerLinkLabel[0] = '';
    this.contextActionLinks.routerLinkLabel[1] = '';
    this.contextActionLinks.routerLinkLabel[2] = '';
    this.contextActionLinks.routerLinkLabel[3] = '';
    this.contextActionLinks.routerLinkLabel[4] = '';
    this.contextActionLinks.routerLinkLabel[5] = '';
    this.contextActionLinks.routerLinkLabel[6] = '';
    this.contextActionLinks.routerLinkLabel[7] = '';
  }

  actionLinks: any;
  contextActionLinks: any;

  onActionLink(linkId: number) {
    if (linkId >= 0 && linkId <= 8) {
      this.contextActionLinks.oncontextLink[this.contextActionLinks.selectedContext]
                                                          (this.actionLinks[linkId].linkName);
    }
  }

  ngOnInit() {
    this.contextActionLinks.selectedContext = 'home';
    this.contextActionLinks.onlinkEvent = onHomeState;

    this.actionLinks = [
      {
        id: 1,
        linkName: '',
        linkRoute: ''
      }
    ];

  }
}


