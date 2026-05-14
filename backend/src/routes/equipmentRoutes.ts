import { Router } from "express";

import { getEquipment, deleteEquipment } from "../controllers/equipmentController";

const router = Router();

router.get("/", getEquipment);
router.delete("/:id", deleteEquipment);

export default router;