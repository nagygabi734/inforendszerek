import { getRepository } from "typeorm";
import { Course } from "../entity/Course";
import { Controller } from "./controller";


export class CourseController extends Controller{
    repository= getRepository(Course);
    
   
}