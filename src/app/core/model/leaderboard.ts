import { User } from './user';

export interface LeaderboardCategory{
    users: User[];
    headline: string;
}

export interface LeaderboardApiResponse{
    top_users: User[];
    top_users_by_level: User[];
    top_users_by_period: User[];
}
