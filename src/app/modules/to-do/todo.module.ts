import { ToDoComponent } from './components/to-do.component';
import { ToDoListComponent } from './components/to-do-list.component';
import { ToDoDetailComponent } from './components/to-do-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ToDoListComponent,
    ToDoDetailComponent,
    ToDoComponent

  ]
})
export class ToDoModule { }
