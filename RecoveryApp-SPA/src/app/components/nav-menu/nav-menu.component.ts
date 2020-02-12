import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NavLinkService } from '../../_services/nav-link.service';
import { MessageService } from '../../_services/Message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})


export class NavMenuComponent implements OnDestroy {

  messages: any[] = [];
  subscription: Subscription;

  constructor(private router: Router,
              private navLinkService: NavLinkService,
              private messageService: MessageService) {
        // subscribe to home component messages
        this.subscription = this.messageService.getMessage().subscribe(message => {
          if (message) {
            // this.messages.push(message);
            this.onActionLink(1);
          } else {
            // clear messages when empty message received
            this.messages = [];
          }
        });
  }

  public actionRouterLinkVar1  = this.navLinkService.contextActionLinks.routerLink[0];
  public actionRouterLinkLabelVar1 = this.navLinkService.contextActionLinks.routerLinkLabel[0];
  public actionRouterLinkVar2  = this.navLinkService.contextActionLinks.routerLinkLabel[1];
  public actionRouterLinkLabelVar2 = this.navLinkService.contextActionLinks.routerLink[1];
  public actionRouterLinkVar3  = this.navLinkService.contextActionLinks.routerLinkLabel[2];
  public actionRouterLinkLabelVar3 = this.navLinkService.contextActionLinks.routerLink[2];
  public actionRouterLinkVar4  = '';
  public actionRouterLinkLabelVar4 = '';
  public actionRouterLinkVar5  = '';
  public actionRouterLinkLabelVar5 = '';
  public actionRouterLinkVar6  = '';
  public actionRouterLinkLabelVar6 = '';
  public actionRouterLinkVar7  = '';
  public actionRouterLinkLabelVar7 = '';
  public actionRouterLinkVar8  = '';
  public actionRouterLinkLabelVar8 = '';

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

  public onActionLink( rank: number  ) {
    this.navLinkService.onActionLink(rank);
    this.actionRouterLinkLabelVar1 = this.navLinkService.contextActionLinks.routerLinkLabel[0];
    this.actionRouterLinkVar1 = this.navLinkService.contextActionLinks.routerLink[0];
    this.actionRouterLinkLabelVar2 = this.navLinkService.contextActionLinks.routerLinkLabel[1];
    this.actionRouterLinkVar2 = this.navLinkService.contextActionLinks.routerLink[1];
    this.actionRouterLinkLabelVar3 = this.navLinkService.contextActionLinks.routerLinkLabel[2];
    this.actionRouterLinkVar3 = this.navLinkService.contextActionLinks.routerLink[2];
    this.actionRouterLinkLabelVar4 = this.navLinkService.contextActionLinks.routerLinkLabel[3];
    this.actionRouterLinkVar4 = this.navLinkService.contextActionLinks.routerLink[3];
    this.actionRouterLinkLabelVar5 = this.navLinkService.contextActionLinks.routerLinkLabel[4];
    this.actionRouterLinkVar5 = this.navLinkService.contextActionLinks.routerLink[4];
    this.actionRouterLinkLabelVar6 = this.navLinkService.contextActionLinks.routerLinkLabel[5];
    this.actionRouterLinkVar6 = this.navLinkService.contextActionLinks.routerLink[5];
    this.actionRouterLinkLabelVar7 = this.navLinkService.contextActionLinks.routerLinkLabel[6];
    this.actionRouterLinkVar7 = this.navLinkService.contextActionLinks.routerLink[6];
    this.actionRouterLinkLabelVar8 = this.navLinkService.contextActionLinks.routerLinkLabel[7];
    this.actionRouterLinkVar8 = this.navLinkService.contextActionLinks.routerLink[7];
    // window.open('https:/localhost:4200/appareils', '_blank');
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
