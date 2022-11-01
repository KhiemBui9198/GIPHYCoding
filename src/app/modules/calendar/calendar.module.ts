import { CalendarComponent } from './components/calendar.component';
import { UserCalendarComponent } from './components/user-calendar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,  
    BrowserModule
  ],
  declarations: [
    CalendarComponent,
    UserCalendarComponent,


  ]
})
export class CalendarComponentModule { }
