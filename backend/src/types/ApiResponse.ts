export type ApiResponse<T> = {
    success: boolean;
    count: number;
    data: T[];
};