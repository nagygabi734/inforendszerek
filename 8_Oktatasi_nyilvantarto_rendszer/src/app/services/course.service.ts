import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { 
  }

  getAll(){

    return this.http.get<Course[]>('api/courses').toPromise();
  }


 create(course:Course){
    return this.http.post<Course>('/api/courses',course).toPromise();
  }

  delete(id:number){
    return this.http.delete<Course>('/api/courses/'+id).toPromise();
  }

}
