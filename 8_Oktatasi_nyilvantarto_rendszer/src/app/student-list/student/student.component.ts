import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input()
  student:Student;


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToStudentForm(id){
   this.router.navigate(['/add-student'],{
     queryParams:{
       id:id
     }
   });
  }
    
}
