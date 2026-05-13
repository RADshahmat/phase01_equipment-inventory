import { getAllEquipment } from "../repositories/equipmentRepository";

export async function fetchEquipment() {

    const equipment = await getAllEquipment();

    return equipment;
}