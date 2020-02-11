import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../../_services/appareil.service';

@Component({
    selector: 'app-appareil',
    templateUrl: './appareil.component.html',
    styleUrls: ['./appareil.component.scss']
})

/* appareil component*/
export class AppareilComponent implements OnInit {

  // appareilName: string = 'Machine à laver';
  // saisir le contenu de la variable appareilName
  @Input() appareilName: string;

  // appareilStatus: string = 'éteint';
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) { }

  onSwitch() {
    if (this.appareilStatus === 'allumé') {
      this.appareilService.switchOffOne(this.index);
    } else if (this.appareilStatus === 'éteint') {
      this.appareilService.switchOnOne(this.index);
    }
  }

  ngOnInit() { }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else if (this.appareilStatus === 'éteint') {
      return 'red';
    }

  }
}
