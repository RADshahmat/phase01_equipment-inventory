export type Equipment = {
    id?: number;
    name: string;
    type: 'server' | 'switch';
    make: string;
    tag: string;
};