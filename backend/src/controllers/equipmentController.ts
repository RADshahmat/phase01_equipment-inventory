import type {Request,Response} from "express";
import { fetchEquipment} from "../services/equipmentService";

export async function getEquipment(req: Request, res: Response) {

        const types =
            typeof req.query.types === "string"
                ? req.query.types.split(",")
                : [];

        const makes =
            typeof req.query.makes === "string"
                ? req.query.makes.split(",")
                : [];

        const search =
            typeof req.query.search === "string"
                ? req.query.search
                : "";

        const equipment = await fetchEquipment({types,  makes, search });

        return res.status(200).json({
            success: true,
            count: equipment.length,
            data: equipment,
        });

  
}