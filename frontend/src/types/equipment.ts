export type Equipment = {
    id: number;
    name: string;
    type: string;
    make: string;
    model: string;
    rack: string;
    unitPosition: number;
    status: string;
    tag: string;
};

export type ApiResponse<T> = {
    success: boolean;
    count: number;
    data: T[];
};