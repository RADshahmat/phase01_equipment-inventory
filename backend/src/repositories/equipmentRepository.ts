import {pool} from "../db/dbconnection";
export async function getAllEquipment() {

    const result = await pool.query(
        `
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
        ORDER BY id ASC
        `
    );

    return result.rows;
}