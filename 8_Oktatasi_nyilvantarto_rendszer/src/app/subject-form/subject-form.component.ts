import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})
export class SubjectFormComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private subjectService:SubjectService,
    private courseService:CourseService) { }

  subjectForm:FormGroup= this.formBuilder.group({
    id:[],
    subjectName:[''],
    courses:[[]]
  });

  courses:Course[];

  successMessage:string;
  errorMessage:string;

  async ngOnInit(){
    this.courses=await this.courseService.getAll();
  }

  async createSubject(){
    const subject=this.subjectForm.value;
    this.successMessage='';
    this.errorMessage='';
    try{
      const subjectAdded=await this.subjectService.createSubject(subject);
      this.successMessage='Subject added with id ' + subjectAdded.id;
    }catch(err){
      this.errorMessage=err.error.message;
    }
  }

  compareCourses(course1:Course,course2:Course):boolean{
    return course1 && course2 && course1.id===course2.id;
  }


}
