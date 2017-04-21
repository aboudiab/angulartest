import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  event: any = {
    id: 123,
    name: 'Welcome to Angular 2',
    price: 123.45,
    time: '10/11/2017'
  }
  constructor() { }

  ngOnInit() {
  }

}
