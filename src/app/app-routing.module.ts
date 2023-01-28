import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:'', component:StudentsComponent, pathMatch:"full"},
  {path:'student', component:StudentComponent},
  {path:'student/:id', component:StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
