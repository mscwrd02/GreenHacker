import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Experiences } from './Experiences';
import { Users } from './Users';

@Entity({ schema: 'didimdol', name: 'scraps' })
export class Scraps {
  @CreateDateColumn()
  createdAt: Date;

  @Column('int', { primary: true, name: 'UserId' })
  UserId: number;

  @Column('int', { primary: true, name: 'ExperienceId' })
  ExperienceId: number;

  @ManyToOne(() => Users, (users) => users.Scraps, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'UserId', referencedColumnName: 'id' }])
  User: Users;

  @ManyToOne(() => Experiences, (experiences) => experiences.Scraps, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ExperienceId', referencedColumnName: 'id' }])
  Experience: Experiences;
}
