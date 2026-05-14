
import { pool } from "../db/dbconnection";

import type { Filters } from "../types/equipmentType"; 

export async function getAllEquipment({
    types,
    makes,
    search,
}: Filters) {

    let query = `
        SELECT
            id,
            name,
            type,
            make,
            model,
            rack,
            unit_position AS "unitPosition",
            status,
            tags
        FROM equipment
        WHERE 1=1
    `;

    const values: (string | string[])[] = [];

    // types
    if (types.length > 0) {

        query += `
            AND type = ANY($${values.length + 1})
        `;

        values.push(types);
    }

    // makes
    if (makes.length > 0) {

        query += `
            AND make = ANY($${values.length + 1})
        `;

        values.push(makes);
    }

    // search tags
    if (search) {

        query += `
            AND EXISTS (
                SELECT 1
                FROM jsonb_array_elements_text(tags) AS tag
                WHERE LOWER(tag)
                LIKE LOWER($${values.length + 1})
            )
        `;

        values.push(`%${search}%`);
    }

    const result =
        await pool.query(query, values);

    return result.rows;
}

export async function deleteEquipmentById(id: number) {

    const result = await pool.query(
        `DELETE FROM equipment WHERE id = $1`,
        [id]
    );

    return result.rowCount;
}