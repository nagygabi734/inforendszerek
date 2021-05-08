import { getRepository } from "typeorm";
import { Teacher } from "../entity/Teacher";

import { Controller } from "./controller";

export class TeacherController extends Controller {
    repository= getRepository(Teacher);
   
    getAll=async(req,res)=>{
        const search=req.query.search || '';
        

         try{
            const entities= await this.repository
            .createQueryBuilder('teacher')
            .where("teacher.name LIKE CONCAT('%', :search, '%')",{search:search})
            .getMany();
            res.json(entities);
        }catch(err){
            console.error(err);
            this.handleError(res);
        }
    }
   
}