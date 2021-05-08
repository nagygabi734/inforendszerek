import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./Student";
import { Subject } from "./Subject";




@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => Subject, subject => subject.courses)
    subjects: Subject[];

    @ManyToMany(() => Student, student => student.courses)
    students: Student[];
}