import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  templateUrl: '../pages/to-do-list.component.html',
  styleUrls: ['../pages/to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }
  addItemTodo(){
    this.router.navigateByUrl('/todo/detail/0');
    }
}
