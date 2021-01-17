import { User } from './user.entity';
import { USER_REPOSITORY } from '../core/database/constants';

export const usersProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
