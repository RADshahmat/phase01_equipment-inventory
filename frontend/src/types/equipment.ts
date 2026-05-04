export type Equipment = {
    id: number;
    name: string;
    type: string;
    make: string;
    model: string;
    rack: string;
    unitposition: number;
    status: string;
    tags: string[];
};

export type ApiResponse<T> = {
    success: boolean;
    count: number;
    data: T[];
};