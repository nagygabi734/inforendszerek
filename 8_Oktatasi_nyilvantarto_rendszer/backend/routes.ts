import {Router} from 'express';
import { CourseController } from './src/controller/course.controller';
import { StudentController } from './src/controller/student.controller';
import { SubjectController } from './src/controller/subject.controller';
import { TeacherController } from './src/controller/teacher.controller';


export function getRouter(){ 
  
    const router= Router();

    const courseController = new CourseController();
    const studentController = new StudentController();
    const subjectController = new SubjectController();
    const teacherController = new TeacherController();


    router.get('/teachers',teacherController.getAll);
    router.get('/teachers/:id',teacherController.getOne);
    router.post('/teachers',teacherController.create);
    router.put('/teachers',teacherController.update)
    router.delete('/teachers/:id',teacherController.delete)

    router.get('/courses',courseController.getAll);
    router.get('/courses/:id',courseController.getOne);
    router.post('/courses',courseController.create);
    router.put('/courses',courseController.update)
    router.delete('/courses/:id',courseController.delete)

    router.get('/students',studentController.getAll);
    router.get('/students/:id',studentController.getOne);
    router.post('/students',studentController.create);
    router.put('/students',studentController.update)
    router.delete('/students/:id',studentController.delete)
    
    router.get('/subjects',subjectController.getAll);
    router.get('/subjects/:id',subjectController.getOne);
    router.post('/subjects',subjectController.create);
    router.put('/subjects',subjectController.update)
    router.delete('/subjects/:id',subjectController.delete)



    return router;
}