import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseFormComponent } from './course-form/course-form.component';
import { OpenerComponent } from './opener/opener.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentListComponent } from './student-list/student-list.component';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';

const routes: Routes = [
  {
    path:'',
    component:OpenerComponent,
  },
  {
    path:'teacher-list',
    component:TeacherListComponent,
  },
  {
    path:'add-teacher',
    component:TeacherFormComponent,
  },
  {
    path:'student-list',
    component:StudentListComponent,
  },
  {
    path:'add-student',
    component:StudentFormComponent,
  },
  {
    path:'add-subject',
    component:SubjectFormComponent,
  },
  {
    path:'add-course',
    component:CourseFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
