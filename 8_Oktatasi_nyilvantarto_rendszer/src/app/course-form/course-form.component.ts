import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  courses:Course[];

  newCourseName:string;

  constructor(private courseService:CourseService) { }

  async ngOnInit(){
    this.courses = await this.courseService.getAll();
  }
  
  async createCourse(){
    const newCourse = await this.courseService.create({
      id:null,
      name:this.newCourseName
    });
    this.courses.push(newCourse);
  }

  async deleteCourse(id:number){
    await this.courseService.delete(id);
    this.courses = await this.courseService.getAll();
  }

}
