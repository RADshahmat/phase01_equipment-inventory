import { Router } from "express";
import { validateRequest } from "../middleware/validateRequest";
import { equipmentQuerySchema, createEquipmentSchema } from "./equipment.schema";
import { createEquipment, getEquipment, deleteEquipment } from "../controllers/equipmentController";

const router = Router();

router.get("/", validateRequest(equipmentQuerySchema), getEquipment);
router.post("/", validateRequest(createEquipmentSchema), createEquipment);
router.delete("/:id", deleteEquipment);

export default router;