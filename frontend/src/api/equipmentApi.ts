import type { Equipment, ApiResponse, Filters } from "../types/equipment";

export async function fetchEquipment( filters: Filters): Promise<Equipment[]> {
    const params = new URLSearchParams();

    // multiple types
    if (filters.types?.length) {
        params.append("types", filters.types.join(",") );
    }

    // multiple makes
    if (filters.makes?.length) {
        params.append( "makes", filters.makes.join(",") );
    }

    // search
    if (filters.search) {
         params.append("search", filters.search);
    }

    const res = await fetch( `http://localhost:5000/api/equipment?${params.toString()}` );

    if (!res.ok) {
        throw new Error(
            "Failed to fetch equipment"
        );
    }
    const data: ApiResponse<Equipment> = await res.json();
    return data.data;
}

export async function deleteEquipment(id: number) {

    const res = await fetch(
        `http://localhost:5000/api/equipment/${id}`,
        {
            method: "DELETE",
        }
    );

    if (!res.ok) {
        throw new Error("Failed to delete equipment");
    }

    return res.json();
}