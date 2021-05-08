import { Course } from "./course";

export interface Subject{
    id:string;
    subjectName:string;
    courses:Course[];
}