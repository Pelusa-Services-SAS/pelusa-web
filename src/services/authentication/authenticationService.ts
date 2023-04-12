// Axios Client
import AxiosClient from '@services/axiosClient';

// Models
import type { IUserLogin, IUserLoginResponse } from '@models/User';

export class AuthenticationService extends AxiosClient {
	public async login(user: IUserLogin): Promise<IUserLoginResponse> {
		const response = await this.post<IUserLoginResponse>(
			'/api/auth/login',
			user
		);
		return response;
	}
}
