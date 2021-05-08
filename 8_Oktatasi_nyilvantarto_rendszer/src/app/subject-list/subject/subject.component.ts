import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'src/app/models/subject';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
 subjects:Subject[];
  @Input()
  subject:Subject;

 
  constructor(private router:Router,
    private subjectService:SubjectService) { }

  ngOnInit(): void {
  }

  navigateToSubjectForm(id){
    this.router.navigate(['/add-subject'],{
      queryParams:{
        id:id
      }
    });
   }

}
