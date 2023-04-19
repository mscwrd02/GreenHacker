import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Excomments } from './Excomments';
import { Experiences } from './Experiences';
import { Mentorings } from './Mentorings';
import { Mentos } from './Mentos';
import { Messages } from './Messages';
import { Qucomments } from './Qucomments';
import { Questions } from './Questions';
import { Scraps } from './Scraps';

@Entity({ schema: 'didimdol', name: 'users' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'varchar', name: 'nickname', length: 20 })
  nickname: string;

  @Column({ type: 'varchar', name: 'email', unique: true, length: 30 })
  email: string;

  @Column({ type: 'varchar', name: 'password', length: 50, select: false })
  password: string;

  @Column({ type: 'varchar', name: 'university', length: 50 })
  university: string;

  @Column({ type: 'int', name: 'point', default: 0 })
  point: number;

  @Column({ type: 'int', name: 'pebble', default: 0 })
  pebble: number;

  @Column({ type: 'int', name: 'level', default: 1 })
  level: number;

  @Column({ type: 'varchar', name: 'image', length: 255, nullable: true })
  image: string | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @OneToMany(() => Experiences, (experiences) => experiences.Author)
  Experiences: Experiences[];

  @OneToMany(() => Excomments, (excomments) => excomments.Author)
  Excomments: Excomments[];

  @OneToMany(() => Scraps, (scraps) => scraps.User)
  Scraps: Scraps[];

  @ManyToMany(() => Experiences, (experiences) => experiences.ScrapedUsers)
  @JoinTable({
    name: 'scraps',
    joinColumn: {
      name: 'UserId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'ExperienceId',
      referencedColumnName: 'id',
    },
  })
  ScrapedExperiences: Experiences[];

  @OneToMany(() => Questions, (questions) => questions.Author)
  Questions: Questions[];

  @OneToMany(() => Qucomments, (qucomments) => qucomments.Author)
  Qucomments: Qucomments[];

  @OneToOne(() => Mentos, (mentos) => mentos.Me)
  AmIMento: Mentos;

  @OneToMany(() => Mentorings, (mentorings) => mentorings.Menti)
  Mentorings: Mentorings[];

  @OneToMany(() => Messages, (messages) => messages.Sender)
  Messages: Messages[];
}

//스크랩한 글은 ScrapedExperiences
//내가 멘토로 등록했다면 AmIMento가 존재함
