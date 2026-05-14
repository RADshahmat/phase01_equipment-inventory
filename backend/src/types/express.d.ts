import { z } from "zod";
import type { equipmentQuery } from "../routes/equipment.schema";



declare global {
    namespace Express {
        interface Request {
            validated?: {
                query?: equipmentQuery;
            };
        }
    }
}