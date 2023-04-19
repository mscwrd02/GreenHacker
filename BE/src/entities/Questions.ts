import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Qucomments } from './Qucomments';
import { Users } from './Users';

@Entity({ schema: 'didimdol', name: 'questions' })
export class Questions {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'text', name: 'title' })
  title: string;

  @Column({ type: 'text', name: 'content' })
  content: string;

  @Column({ type: 'int', name: 'view', default: 0 })
  view: number;

  @Column({ type: 'tinyint', width: 1, name: 'isChoosed', default: 0 })
  isChoosed: boolean;

  @Column({ type: 'int', name: 'pebble', default: 0 })
  pebble: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @Column({ type: 'int', name: 'AuthorId', nullable: true })
  AuthorId: number | null;

  @ManyToOne(() => Users, (users) => users.Questions, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'AuthorId', referencedColumnName: 'id' }])
  Author: Users;

  @OneToMany(() => Qucomments, (qucomments) => qucomments.Question)
  Comments: Qucomments[];
}
//작성자는 Author
//질문글 댓글은 Comments(Qucomments 아님!)
