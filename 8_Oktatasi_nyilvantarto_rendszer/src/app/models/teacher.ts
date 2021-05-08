import { Subject } from "./subject";

export interface Teacher{
    id:string;
    name:string;
    department:string;
    subjects:Subject[];
}