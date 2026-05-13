import { Router } from "express";

import equipmentRoutes from "./equipmentRoutes";

const router = Router();

router.use("/equipment", equipmentRoutes);

export default router;