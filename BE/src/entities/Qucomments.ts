import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Questions } from './Questions';
import { Users } from './Users';

@Entity({ schema: 'didimdol', name: 'qucomments' })
export class Qucomments {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'text', name: 'content' })
  content: string;

  @Column({ type: 'tinyint', width: 1, name: 'isChoosed', default: 0 })
  isChoosed: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'int', name: 'QuestionId', nullable: true })
  QuestionId: number | null;

  @Column({ type: 'int', name: 'AuthorId', nullable: true })
  AuthorId: number | null;

  @ManyToOne(() => Questions, (questions) => questions.Comments, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'QuestionId', referencedColumnName: 'id' }])
  Question: Questions;

  @ManyToOne(() => Users, (users) => users.Qucomments, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'AuthorId', referencedColumnName: 'id' }])
  Author: Users;
}

//작성자는 Author
