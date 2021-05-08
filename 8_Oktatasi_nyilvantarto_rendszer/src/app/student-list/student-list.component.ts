import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students:Student[];

  searchQuery:string;
  
  
 
  constructor(private studentService:StudentService) { }

  async ngOnInit() {
    this.students=await this.studentService.loadStudent();
  }

  async search() {
    this.students =await this.studentService.filterStudents(this.searchQuery);
  }


}
