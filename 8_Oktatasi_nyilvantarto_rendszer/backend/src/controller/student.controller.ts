import { getRepository } from "typeorm";
import { Student } from "../entity/Student";
import { Controller } from "./controller";

export class StudentController extends Controller{
    repository= getRepository(Student);
    
    getAll=async(req,res)=>{
        const search=req.query.search || '';
        

         try{
            const entities= await this.repository
            .createQueryBuilder('student')
            .where("student.name LIKE CONCAT('%', :search, '%')",{search:search})
            .leftJoinAndSelect('student.subject','subject')
            .getMany();
            res.json(entities);
        }catch(err){
            console.error(err);
            this.handleError(res);
        }
    }
}