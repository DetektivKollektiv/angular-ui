import { User } from '../../core/model/user';

export interface Issue {
    top_users: [User];
    top_users_by_level: [User];
    top_users_by_period: [User];
}
