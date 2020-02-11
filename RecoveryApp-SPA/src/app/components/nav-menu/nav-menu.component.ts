import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NavLinkService } from '../../_services/nav-link.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})


export class NavMenuComponent {

  constructor(private router: Router, private navLinkService: NavLinkService) {}

  public actionRouterLinkVar1 = '/auth';
  public actionRouterLinkLabelVar1 = 'Login';

  @Input() routerLink1: string;
  @Input() routerLink2: string;
  @Input() routerLink3: string;
  @Input() linkName1: string;
  @Input() linkName2: string;
  @Input() linkName3: string;

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  /*
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let change = changes[propName];
      if (propName === 'routerLink1') {
        this.routerLinkVar1 = JSON.stringify(change.currentValue);
      }
    }
  }
  */
  onActionLink1() {
    // this.navLinkService.onActionLink(1);
    // this.actionRouterLinkLabelVar1 = this.navLinkService.contextActionLinks.routerLinkLabel[0];
    // this.actionRouterLinkVar1 = this.navLinkService.contextActionLinks.routerLink[0];
  }
}
