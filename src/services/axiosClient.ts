import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

class AxiosClient {
	public axiosInstance: AxiosInstance;
	private readonly baseURL: string;

	constructor() {
		this.baseURL = import.meta.env.VITE_PELUSA_SERVER ?? '';
		this.axiosInstance = axios.create({
			baseURL: this.baseURL,
			timeout: 10000,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}

	public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
		const response = await this.axiosInstance.get<T>(url, config);
		return response.data;
	}

	public async post<T>(
		url: string,
		data?: any,
		config?: AxiosRequestConfig
	): Promise<T> {
		const response = await this.axiosInstance.post<T>(url, data, config);
		return response.data;
	}

	public async put<T>(
		url: string,
		data?: any,
		config?: AxiosRequestConfig
	): Promise<T> {
		const response = await this.axiosInstance.put<T>(url, data, config);
		return response.data;
	}

	public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
		const response = await this.axiosInstance.delete<T>(url, config);
		return response.data;
	}
}

export default AxiosClient;
