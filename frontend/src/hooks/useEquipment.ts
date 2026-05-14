import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchEquipment, deleteEquipment } from "../api/equipmentApi";
import type { Filters } from "../types/equipment";

export function useEquipment(filters: Filters) {

    return useQuery({
        queryKey: ["equipment", filters],

        queryFn: () => fetchEquipment(filters),

    });
}

// Delete hook
export function useDeleteEquipment() {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteEquipment,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["equipment"],
            });
        },
    });
}