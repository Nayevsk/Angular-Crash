import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import {TASKS} from '../../mock-taks'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task [] = TASKS; // fullfill tasks with an array of objects (TASKS mock DB) following the rules of Task (TS format)

  constructor() { }

  ngOnInit(): void {
  }

}
