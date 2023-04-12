export interface IUserLogin {
	email: string;
	password: string;
	remember?: boolean;
}

export interface IUserLoginResponse {
	user: IUser;
	token: string;
}

export interface IUser {
	_id: string;
	username: string;
	email: string;
	status: boolean;
	google: boolean;
	role: string;
	createdAt: string | Date;
	updatedAt: string | Date;
}
