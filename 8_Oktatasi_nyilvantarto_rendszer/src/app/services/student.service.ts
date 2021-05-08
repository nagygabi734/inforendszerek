import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

   loadStudent(){

    return this.http.get<Student[]>('api/students').toPromise();
  }

   filterStudents(search:string){
    return this.http.get<Student[]>('/api/students',{
      params:{search}
    }).toPromise();
  }

   addStudent(student:Student){
    return this.http.post<Student>('/api/students',student).toPromise();
  }

   getStudentById(id: string){
    return this.http.get<Student>('/api/students/' + id).toPromise();
  }
  
}
