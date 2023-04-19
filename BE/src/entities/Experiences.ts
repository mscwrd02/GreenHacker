import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Excomments } from './Excomments';
import { Scraps } from './Scraps';
import { Tags } from './Tags';
import { Users } from './Users';

@Entity({ schema: 'didimdol', name: 'experiences' })
export class Experiences {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'text', name: 'title' })
  title: string;
  @Column({ type: 'text', name: 'content' })
  content: string;

  @Column({ type: 'int', name: 'view', default: 0 })
  view: number;

  @Column({ type: 'tinyint', width: 1, name: 'isFree' })
  isFree: boolean;

  @Column({ type: 'int', name: 'cost', default: 0 })
  cost: number;

  @Column({ type: 'int', name: 'scrap', default: 0 })
  scrap: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @Column({ type: 'int', name: 'AuthorId', nullable: true })
  AuthorId: number | null;

  @ManyToOne(() => Users, (users) => users.Experiences, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'AuthorId', referencedColumnName: 'id' }])
  Author: Users;

  @OneToMany(() => Excomments, (excomments) => excomments.Experience)
  Comments: Excomments[];

  @OneToMany(() => Scraps, (scraps) => scraps.Experience)
  Scraps: Scraps[];

  @ManyToMany(() => Users, (users) => users.ScrapedExperiences)
  ScrapedUsers: Users[];

  @ManyToMany(() => Tags, (tags) => tags.Experiences)
  Tags: Tags[];
}

//작성자는 Author
//경험글 댓글은 Comments (ExComments 아님!)
//스크랩한 사람은 ScrapedUsers
