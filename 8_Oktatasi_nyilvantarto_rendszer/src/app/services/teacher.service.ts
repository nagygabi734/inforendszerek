import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher';



@Injectable({
  providedIn: 'root'
})
export class TeacherService {



  constructor(private http:HttpClient) { }


   loadTeacher(){

    return this.http.get<Teacher[]>('api/teachers').toPromise();
  }

   filterTeachers(search:string){
    return this.http.get<Teacher[]>('/api/teachers',{
      params:{search}
    }).toPromise();
  }

   addTeacher(teacher:Teacher){
    return this.http.post<Teacher>('/api/teachers',teacher).toPromise();
  }

   getTeacherById(id: string){
    return this.http.get<Teacher>('/api/teachers/' + id).toPromise();
  }
}

