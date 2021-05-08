import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { Subject } from "./Subject";


@Entity()
export class Teacher {
       
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ nullable: true, type: 'text' })
    name: string;
    
    @Column({ nullable: true, type: 'text' })
    department: string;
       
    @ManyToMany(() => Subject, subject => subject.teachers, {
        eager: true,
        cascade: true
    })
    @JoinTable()
    subjects:Subject[];
}