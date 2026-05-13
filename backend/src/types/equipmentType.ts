

export type EquipmentStatus = 'active' | 'maintenance' | 'offline';

export type Equipment = {
    id?: number;
    name: string;
    type: string;
    make: string;
    model: string;
    rack: string;
    unitPosition: number;
    status: string;
    tags: string[];
};

export type Filters = {
    types: string[];
    makes: string[];
    search: string;
};