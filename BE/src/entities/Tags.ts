import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Experiences } from './Experiences';
import { Mentos } from './Mentos';

@Entity({ schema: 'didimdol', name: 'tags' })
export class Tags {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'varchar', name: 'name', length: 30 })
  content: string;

  @ManyToMany(() => Experiences, (experiences) => experiences.Tags)
  @JoinTable({
    name: 'experiencetags',
    joinColumn: {
      name: 'TagId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'ExperienceId',
      referencedColumnName: 'id',
    },
  })
  Experiences: Experiences[];

  @ManyToMany(() => Mentos, (mentos) => mentos.Tags)
  @JoinTable({
    name: 'mentotags',
    joinColumn: {
      name: 'TagId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'MentoId',
      referencedColumnName: 'id',
    },
  })
  Mentos: Mentos[];
}
