import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from '../models/subject';
import { StudentService } from '../services/student.service';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
 
  studentForm:FormGroup= this.formBuilder.group({
    id:[],
    name:['Minta Mihály',Validators.minLength(6)],
    department:['BI'],
    subject:[]
  });

  subjects:Subject[];

  constructor(private studentService:StudentService,
    private formBuilder:FormBuilder,
    private router:Router,
    private subjectService:SubjectService,
    private activatedRoute:ActivatedRoute) { }

    get id(){
      return this.studentForm.get("id");
    }
    get name(){
      return this.studentForm.get("name");
    }

 async ngOnInit(){
  this.subjects=await this.subjectService.getSubjects();
  const id= this.activatedRoute.snapshot.queryParams.id;

    if(id){
      const student=await this.studentService.getStudentById(id);
      this.studentForm.setValue(student);
    }
  }

  addStudent(){
    const student= this.studentForm.value;
    this.studentService.addStudent(student);
    this.router.navigateByUrl("/student-list");
    }

    compareSubjects(subject1:Subject,subject2:Subject):boolean{
      return subject1 && subject2 && subject1.id===subject2.id;
    }


}
