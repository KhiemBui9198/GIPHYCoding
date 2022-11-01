import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar.component';
import { UserCalendarComponent } from './components/user-calendar.component';
export const CalendarRoutes: Routes = [
  {

    path: '',
    component: CalendarComponent,
    data: {
      Title: "Calendar"
    },
    children: [
      {
        path: '',
        component: UserCalendarComponent
      }
    ]



  }

];