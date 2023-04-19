import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Experiences } from './Experiences';
import { Users } from './Users';

@Entity({ schema: 'didimdol', name: 'excomments' })
export class Excomments {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'text', name: 'content' })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'int', name: 'ExperienceId', nullable: true })
  ExperienceId: number | null;

  @Column({ type: 'int', name: 'AuthorId', nullable: true })
  AuthorId: number | null;

  @ManyToOne(() => Experiences, (experiences) => experiences.Comments, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ExperienceId', referencedColumnName: 'id' }])
  Experience: Experiences;

  @ManyToOne(() => Users, (users) => users.Excomments, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'AuthorId', referencedColumnName: 'id' }])
  Author: Users;
}

//작성자는 Author
