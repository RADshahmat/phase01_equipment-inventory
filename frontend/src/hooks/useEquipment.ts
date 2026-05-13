import { useQuery } from "@tanstack/react-query";
import { fetchEquipment } from "../api/equipmentApi";
import type { Filters } from "../types/equipment";

export function useEquipment(filters: Filters) {

    return useQuery({
        queryKey: ["equipment", filters],

        queryFn: () => fetchEquipment(filters),

    });
}