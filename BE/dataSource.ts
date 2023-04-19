import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { Users } from './src/entities/Users';
import { Experiences } from './src/entities/Experiences';
import { Excomments } from './src/entities/Excomments';
import { Scraps } from './src/entities/Scraps';
import { Questions } from './src/entities/Questions';
import { Qucomments } from './src/entities/Qucomments';
import { Tags } from './src/entities/Tags';
import { Mentos } from './src/entities/Mentos';
import { Mentorings } from './src/entities/Mentorings';
import { Messages } from './src/entities/Messages';

dotenv.config();

const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    Users,
    Experiences,
    Excomments,
    Scraps,
    Questions,
    Qucomments,
    Tags,
    Mentos,
    Mentorings,
    Messages,
  ],
  charset: 'utf8mb4_general_ci',
  synchronize: false,
  logging: true,
});

export default dataSource;

/* 
초기 데이터 베이스 생성할때
npm run db: create 하면
dataSource.ts읽어서 db 생성해주고
entity등록된거 생성해줌
*/
