import { getRepository } from "typeorm";
import { Subject } from "../entity/Subject";
import { Controller } from "./controller";

export class SubjectController extends Controller{
    repository= getRepository(Subject);
    
   
}