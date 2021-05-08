import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent implements OnInit {

  teacherForm:FormGroup= this.formBuilder.group({
    id:[],
    name:['Minta Károly',Validators.minLength(6)],
    department:['GÉIK']
  });


  constructor(private teacherService:TeacherService,
    private formBuilder:FormBuilder,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

    get id(){
      return this.teacherForm.get("id");
    }
    get name(){
      return this.teacherForm.get("name");
    }

  async ngOnInit(){
    const id= this.activatedRoute.snapshot.queryParams.id;

    if(id){
      const teacher=await this.teacherService.getTeacherById(id);
      this.teacherForm.setValue(teacher);
    }
  }

  addTeacher(){
    const teacher= this.teacherForm.value;
    this.teacherService.addTeacher(teacher);
    this.router.navigateByUrl("/teacher-list");
    }

}
