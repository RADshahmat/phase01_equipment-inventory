import type {Request,Response} from "express";
import { fetchEquipment, removeEquipment } from "../services/equipmentService";
import { equipmentQuerySchema } from "../routes/equipment.schema";

export async function getEquipment(req: Request, res: Response) {

    const parsed = equipmentQuerySchema.parse(req.query);
    const equipment = await fetchEquipment(parsed);

        return res.status(200).json({
            success: true,
            count: equipment.length,
            data: equipment,
        });

  
}

export async function deleteEquipment(req: Request, res: Response) { 
    const id = Number(req.params.id);

    if (isNaN(id)){
        return res.status(400).json({
            success: false,
            message: "Invalid equipment ID",
        });
    }
    await removeEquipment(id);

    return res.status(200).json({
        success: true,
        message: "Equipment deleted successfully",
    });
}

export async function createEquipment(
    req: Request,
    res: Response
) {
    return res.status(201).json({
        success: true,
        data: req.body,
    });
}