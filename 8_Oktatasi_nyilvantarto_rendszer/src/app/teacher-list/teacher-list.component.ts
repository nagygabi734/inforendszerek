import { Component, Input, OnInit } from '@angular/core';
import { Teacher } from '../models/teacher';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  teachers:Teacher[];

  searchQuery:string;
  
  
 
  constructor(private teacherService:TeacherService) { }

  async ngOnInit() {
    this.teachers=await this.teacherService.loadTeacher();
  }

  async search() {
    this.teachers =await this.teacherService.filterTeachers(this.searchQuery);
  }


}
