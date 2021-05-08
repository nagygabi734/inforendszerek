import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenerComponent } from './opener/opener.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherComponent } from './teacher-list/teacher/teacher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student-list/student/student.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectComponent } from './subject-list/subject/subject.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenerComponent,
    TeacherListComponent,
    TeacherComponent,
    TeacherFormComponent,
    StudentListComponent,
    StudentComponent,
    StudentFormComponent,
    CourseFormComponent,
    SubjectFormComponent,
    SubjectListComponent,
    SubjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
