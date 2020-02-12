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

  public actionRouterLinkVar1  = this.navLinkService.NavLinks.routerActionLink[0];
  public actionRouterLinkLabelVar1 = this.navLinkService.NavLinks.routerActionLinkLabel[0];
  public actionRouterLinkVar2  = this.navLinkService.NavLinks.routerActionLinkLabel[1];
  public actionRouterLinkLabelVar2 = this.navLinkService.NavLinks.routerActionLink[1];
  public actionRouterLinkVar3  = this.navLinkService.NavLinks.routerActionLinkLabel[2];
  public actionRouterLinkLabelVar3 = this.navLinkService.NavLinks.routerActionLink[2];
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

  public contextRouterLinkVar1  = this.navLinkService.NavLinks.routerContextLink[0];
  public contextRouterLinkLabelVar1 = this.navLinkService.NavLinks.routerContextLinkLabel[0];
  public contextRouterLinkVar2  = this.navLinkService.NavLinks.routerContextLinkLabel[1];
  public contextRouterLinkLabelVar2 = this.navLinkService.NavLinks.routerContextLink[1];
  public contextRouterLinkVar3  = this.navLinkService.NavLinks.routerContextLinkLabel[2];
  public contextRouterLinkLabelVar3 = this.navLinkService.NavLinks.routerContextLink[2];
  public contextRouterLinkVar4  = '';
  public contextRouterLinkLabelVar4 = '';
  public contextRouterLinkVar5  = '';
  public contextRouterLinkLabelVar5 = '';
  public contextRouterLinkVar6  = '';
  public contextRouterLinkLabelVar6 = '';
  public contextRouterLinkVar7  = '';
  public contextRouterLinkLabelVar7 = '';
  public contextRouterLinkVar8  = '';
  public contextRouterLinkLabelVar8 = '';

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
    this.updateButttons();
    // window.open('https:/localhost:4200/appareils', '_blank');
  }

  public onContextLink( rank: number  ) {
    this.navLinkService.onContextLink(rank);
    this.updateButttons();
  }

  updateButttons()
  {
    this.contextRouterLinkLabelVar1 = this.navLinkService.NavLinks.routerContextLinkLabel[0];
    this.contextRouterLinkVar1 = this.navLinkService.NavLinks.routerContextLink[0];
    this.contextRouterLinkLabelVar2 = this.navLinkService.NavLinks.routerContextLinkLabel[1];
    this.contextRouterLinkVar2 = this.navLinkService.NavLinks.routerContextLink[1];
    this.contextRouterLinkLabelVar3 = this.navLinkService.NavLinks.routerContextLinkLabel[2];
    this.contextRouterLinkVar3 = this.navLinkService.NavLinks.routerContextLink[2];
    this.contextRouterLinkLabelVar4 = this.navLinkService.NavLinks.routerContextLinkLabel[3];
    this.contextRouterLinkVar4 = this.navLinkService.NavLinks.routerContextLink[3];
    this.contextRouterLinkLabelVar5 = this.navLinkService.NavLinks.routerContextLinkLabel[4];
    this.contextRouterLinkVar5 = this.navLinkService.NavLinks.routerContextLink[4];
    this.contextRouterLinkLabelVar6 = this.navLinkService.NavLinks.routerContextLinkLabel[5];
    this.contextRouterLinkVar6 = this.navLinkService.NavLinks.routerContextLink[5];
    this.contextRouterLinkLabelVar7 = this.navLinkService.NavLinks.routerContextLinkLabel[6];
    this.contextRouterLinkVar7 = this.navLinkService.NavLinks.routerContextLink[6];
    this.contextRouterLinkLabelVar8 = this.navLinkService.NavLinks.routerContextLinkLabel[7];
    this.contextRouterLinkVar8 = this.navLinkService.NavLinks.routerContextLink[7];

    this.actionRouterLinkLabelVar1 = this.navLinkService.NavLinks.routerActionLinkLabel[0];
    this.actionRouterLinkVar1 = this.navLinkService.NavLinks.routerActionLink[0];
    this.actionRouterLinkLabelVar2 = this.navLinkService.NavLinks.routerActionLinkLabel[1];
    this.actionRouterLinkVar2 = this.navLinkService.NavLinks.routerActionLink[1];
    this.actionRouterLinkLabelVar3 = this.navLinkService.NavLinks.routerActionLinkLabel[2];
    this.actionRouterLinkVar3 = this.navLinkService.NavLinks.routerActionLink[2];
    this.actionRouterLinkLabelVar4 = this.navLinkService.NavLinks.routerActionLinkLabel[3];
    this.actionRouterLinkVar4 = this.navLinkService.NavLinks.routerActionLink[3];
    this.actionRouterLinkLabelVar5 = this.navLinkService.NavLinks.routerActionLinkLabel[4];
    this.actionRouterLinkVar5 = this.navLinkService.NavLinks.routerActionLink[4];
    this.actionRouterLinkLabelVar6 = this.navLinkService.NavLinks.routerActionLinkLabel[5];
    this.actionRouterLinkVar6 = this.navLinkService.NavLinks.routerActionLink[5];
    this.actionRouterLinkLabelVar7 = this.navLinkService.NavLinks.routerActionLinkLabel[6];
    this.actionRouterLinkVar7 = this.navLinkService.NavLinks.routerActionLink[6];
    this.actionRouterLinkLabelVar8 = this.navLinkService.NavLinks.routerActionLinkLabel[7];
    this.actionRouterLinkVar8 = this.navLinkService.NavLinks.routerActionLink[7];
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
