import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Mentos } from './Mentos';
import { Messages } from './Messages';
import { Users } from './Users';

@Entity({ schema: 'didimdol', name: 'mentorings' })
export class Mentorings {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'tinyint', width: 1, name: 'isConnected', default: 0 })
  isConnected: boolean;

  @Column({ type: 'int', name: 'lastMessageId', nullable: true })
  lastMessageId: number;

  @Column({ type: 'int', primary: true, name: 'MentoId' })
  MentoId: number;

  @Column({ type: 'int', name: 'MentiId', primary: true })
  MentiId: number;

  @ManyToOne(() => Mentos, (mentos) => mentos.Mentorings, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'MentoId', referencedColumnName: 'id' }])
  Mento: Mentos;

  @ManyToOne(() => Users, (users) => users.Mentorings, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'MentiId', referencedColumnName: 'id' }])
  Menti: Users;

  @OneToMany(() => Messages, (messages) => messages.Mentoring)
  Messages: Messages[];
}
