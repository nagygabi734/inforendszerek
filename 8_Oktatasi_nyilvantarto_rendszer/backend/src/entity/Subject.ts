import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./Course";
import { Student } from "./Student";
import { Teacher } from "./Teacher";


@Entity()
export class Subject {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    subjectName: string;

    @ManyToMany(() => Course, course => course.subjects, {
        eager: true,
        cascade: true
    })
    @JoinTable()
    courses:Course[];
    

    @ManyToMany(() => Teacher, teacher => teacher.subjects,)
    teachers:Teacher[];
    
    @OneToMany(type => Student, student => student.subject)
    students: Student[];
    

}