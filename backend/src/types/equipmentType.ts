

export type EquipmentStatus = 'active' | 'maintenance' | 'offline';

export type Equipment = {
    name: string;
    type: string;
    make: string;
    model: string;
    rack: string;
    unitPosition: number;
    status: string;
    tags: string[];
};