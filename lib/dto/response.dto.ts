export type ApiResponse<T> = {
	message: string;
	status: boolean;
	data: T;
	pagination: {
		page: number;
		pageSize: number;
		totalItems: number;
		totalPages: number;
	};
};
