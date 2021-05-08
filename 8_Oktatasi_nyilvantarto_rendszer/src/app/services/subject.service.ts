import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from '../models/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

   getSubjects(){
    return this.http.get<Subject[]>('api/subjects').toPromise();
  }

  createSubject(subject:Subject){
    return this.http.post<Subject>('api/subjects',subject).toPromise();
  }
  getSubjectById(id: string){
    return this.http.get<Subject>('/api/subjects/' + id).toPromise();
  }
 
}
