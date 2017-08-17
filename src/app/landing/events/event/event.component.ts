import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.sass']
})
export class EventComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _eventsService: EventsService
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
      this._eventsService.getEvent(params.id).subscribe( res => console.log(res));
    });
  }

//  TODO: sharing functionality, map, switch user functionality

}
