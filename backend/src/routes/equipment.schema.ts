import { z } from "zod";
import { checkEquipmentExists } from "../repositories/equipmentRepository";

export const equipmentQuerySchema = z.object({
    types: z
        .string()
        .optional()
        .transform((val) =>
            val ? val.split(",").filter(Boolean) : []
        ),

    makes: z
        .string()
        .optional()
        .transform((val) =>
            val ? val.split(",").filter(Boolean) : []
        ),

    search: z
        .string()
        .optional()
        .default(""),
});


export const createEquipmentSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    type: z.enum([ "server",  "switch", "router", "ups", ]),
    make: z.string().min(1),
    model: z.string().min(1),
    rack: z.string().min(1),
    unitPosition: z.number().int().positive(),
    status: z.enum([ "active", "offline", "maintenance", ]),
    tags: z.array(z.string()).min(1),
})
    .superRefine(async (data, ctx) => {

        const exists = await checkEquipmentExists(data.name);

        if (exists) {
            ctx.addIssue({
                code: "custom",
                path: ["name"],
                message: "Equipment name already exists",
            });
        }
    });

export const deleteEquipmentSchema = z.object({
    params: z.object({
        id: z.string()
            .transform((val) => Number(val))
            .refine((val) => !isNaN(val), {
                message: "Invalid ID",
            })
            .refine((val) => val > 0, {
                message: "ID must be positive",
            }),
    }),
});

export type CreateEquipmentInput = z.infer<typeof createEquipmentSchema>;
export type equipmentQuery = z.infer<typeof equipmentQuerySchema>;