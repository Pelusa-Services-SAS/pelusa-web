import { type IUser } from '@models/User';

export interface IAuthenticationState {
	user: IUser | null;
	token: string;
	isAuthenticated: boolean;
	failedRequest?: string | null;
}
