import { Request, Response } from "express";

import { fetchEquipment } from "../services/equipmentService.js";

export async function getEquipment(
    req: Request,
    res: Response
) {
    try {

        const data = await fetchEquipment();

        res.status(200).json({
            success: true,
            count: data.length,
            data,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Failed to fetch equipment",
        });
    }
}