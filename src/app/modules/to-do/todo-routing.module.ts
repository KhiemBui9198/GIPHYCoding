import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoComponent } from './components/to-do.component';
import { ToDoListComponent } from './components/to-do-list.component';
import { ToDoDetailComponent } from './components/to-do-detail.component';
export const TodoRoutes: Routes = [
  {

    path: '',
    component: ToDoComponent,
    data: {
      Title: "Setting"
    },
    children: [
      {
        path: '',
        component: ToDoListComponent
      },
      {
        path: 'detail/:todoId',
        component: ToDoDetailComponent
      }
    ]
  }

];