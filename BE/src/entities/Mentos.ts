import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Mentorings } from './Mentorings';
import { Tags } from './Tags';
import { Users } from './Users';

@Entity({ schema: 'didimdol', name: 'mentos' })
export class Mentos {
  @PrimaryColumn({ type: 'int', name: 'id', primary: true })
  id: number;

  @Column({ type: 'text', name: 'introduction', nullable: true })
  introduction: string;

  @Column({ type: 'int', name: 'MyId' })
  MyId: number;

  @OneToOne(() => Users, (users) => users.AmIMento, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'MyId', referencedColumnName: 'id' }])
  Me: Users;

  @ManyToMany(() => Tags, (tags) => tags.Mentos)
  Tags: Tags[];

  @OneToMany(() => Mentorings, (mentorings) => mentorings.Mento)
  Mentorings: Mentorings[];
}

//내 원래 정보 : Me (멘토가 아닌 일반 사용자로써)
//MyId
