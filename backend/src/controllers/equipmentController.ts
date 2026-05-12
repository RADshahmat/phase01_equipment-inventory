import { Request, Response } from "express";
import { pool } from "../db/dbconnection";

export async function getEquipment(
    req: Request,
    res: Response
) {
    try {
        const result = await pool.query(
            "SELECT * FROM equipment ORDER BY id ASC"
        );

        res.json({
            success: true,
            count: result.rows.length,
            data: result.rows,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch equipment",
        });
    }
}