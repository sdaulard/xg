import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../../_services/appareil.service';

@Component({
    selector: 'app-appareil-view',
    templateUrl: './appareil-view.component.html',
    styleUrls: ['./appareil-view.component.scss']
})

/* appareil-view component*/
export class AppareilViewComponent implements OnInit {
    /* appareil-view ctor */
  constructor(private appareilService: AppareilService) {

  }

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() id: number;


  isAuth = false;

  // lastUpdate = new Date();
  // illustration du pipe async  pour lire les données en asynchrone notamment issues d'un serveur
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  appareils: any[];


  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }


}
