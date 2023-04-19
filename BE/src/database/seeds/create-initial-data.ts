import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Users } from '../../entities/Users';

export default class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const usersRepository = dataSource.getRepository(Users);
    await usersRepository.insert([
      {
        email: 'ehdtodvodl@gmail.com',
        nickname: 'mscwrd02',
        password: 'QWer!@34Q',
      },
    ]);
  }
}
