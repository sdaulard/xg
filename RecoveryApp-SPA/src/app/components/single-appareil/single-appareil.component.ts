import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../../_services/appareil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
/* SingleAppareil component*/
export class SingleAppareilComponent implements OnInit {
  /** SingleAppareil ctor */
  name = 'Appareil';
  status = 'Statut';

  constructor(private appareilService: AppareilService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;

    // + devant id caste la variable comme nombre
    this.name = this.appareilService.getAppareilById(+id).name;
    this.status = this.appareilService.getAppareilById(+id).status;
  }
}
