import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentsService } from '../services/departments.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {
  fields: any;
  form = new FormGroup({});

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private departmentService: DepartmentsService,
  ) {
    this.fields = this.route.snapshot.data.fields.reduce((acc: any, item) => {
      (acc[item.category] = acc[item.category] || []).push(item);
      return acc;
    }, {});
  }

  ngOnInit(): void {
    this.route.snapshot.data.fields.forEach((field: any) => {
      this.form.registerControl(field.key, new FormControl(''))
    })
  }

  onSubmit(event) {
    event.preventDefault();
    this.departmentService.save(this.form.value).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
