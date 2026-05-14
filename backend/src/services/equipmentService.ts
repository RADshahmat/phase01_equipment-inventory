// services/equipmentService.ts

import { getAllEquipment, deleteEquipmentById } from "../repositories/equipmentRepository";
import type { Filters } from "../types/equipmentType";

export async function fetchEquipment( filters: Filters) {

    // future business logic goes here

    return await getAllEquipment(filters);
}


export async function removeEquipment(id: number) {
    return await deleteEquipmentById(id);
}