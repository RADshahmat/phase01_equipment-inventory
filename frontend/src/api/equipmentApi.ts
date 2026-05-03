import type { Equipment, ApiResponse } from "../types/equipment";

export async function fetchEquipment(): Promise<Equipment[]> {
    const res = await fetch("/equipment.json");
    const data: ApiResponse<Equipment> = await res.json();
    return data.data;
}