import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Mentorings } from './Mentorings';
import { Users } from './Users';

@Entity({ schema: 'didimdol', name: 'messages' })
export class Messages {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'text', name: 'content' })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'int', name: 'MentoringId', nullable: true })
  MentoringId: number;

  @Column({ type: 'int', name: 'SenderId', nullable: true })
  SenderId: number;

  @ManyToOne(() => Mentorings, (mentorings) => mentorings.Messages, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'MentoringId', referencedColumnName: 'id' }])
  Mentoring: Mentorings;

  @ManyToOne(() => Users, (users) => users.Messages, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'SenderId', referencedColumnName: 'id' }])
  Sender: Users;
}

//보낸사람 : Sender
