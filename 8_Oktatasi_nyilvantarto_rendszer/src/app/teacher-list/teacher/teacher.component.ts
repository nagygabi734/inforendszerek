import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/models/teacher';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  @Input()
  teacher:Teacher;

  constructor(private router:Router) { }



  ngOnInit(): void {
  }

  navigateToTeacherForm(id){
    this.router.navigate(['/add-teacher'],{
      queryParams:{
        id:id
      }
    });
   }

}
