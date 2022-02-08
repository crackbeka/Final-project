import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todos, TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos!: Todos[];

  todo: Todos['completed'] = true;
  constructor(private http: HttpClient, private todoService: TodosService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
    });
  }
}
