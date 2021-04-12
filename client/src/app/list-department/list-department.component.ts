import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../services/departments.service';

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit {
  departments: any;
  search: any = '';

  constructor(
    private departmentService: DepartmentsService,
  ) { }

  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments() {
    this.departmentService.get({ q: this.search }).subscribe((data) => {
      this.departments = data;
    })
  }
}
