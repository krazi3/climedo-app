import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { ListDepartmentComponent } from './list-department/list-department.component';
import { FieldResolver } from './resolvers/field.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListDepartmentComponent
  },
  {
    path: 'create',
    component: CreateDepartmentComponent,
    resolve: {
      fields: FieldResolver,
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
