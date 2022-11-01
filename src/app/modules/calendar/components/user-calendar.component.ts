import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-user-calendar',
  templateUrl: '../pages/user-calendar.component.html',
  styleUrls: ['../pages/user-calendar.component.scss']
})
export class UserCalendarComponent implements OnInit {

  
  calendarOptions: CalendarOptions = {
  };

  constructor() { }
  
  ngOnInit(): void {
  }

}
