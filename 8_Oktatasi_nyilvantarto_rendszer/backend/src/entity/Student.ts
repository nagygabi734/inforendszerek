import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinTable} from "typeorm";
import { Course } from "./Course";
import { Subject } from './Subject';

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, type: 'text' })
    name: string;

    @Column({ nullable: true, type: 'text' })
    department: string;

    @Column({ nullable: true})
    mark: string;

   
    @ManyToOne(type => Subject, {
        eager: true,
        cascade: true
    })
    subject: Subject;

    @ManyToMany(() => Course, course => course.students, {
        eager: true,
        cascade: true
    })
    @JoinTable()
    courses: Course[];
}