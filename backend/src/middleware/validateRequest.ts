import { z } from "zod";
import { Request, Response, NextFunction } from "express";

export const validateRequest =
    (schema: z.ZodTypeAny) =>
        async (
            req: Request,
            res: Response,
            next: NextFunction
        ) => {
            try {
                await schema.parseAsync({
                    body: req.body,
                    params: req.params,
                    query: req.query,
                });

                next();
            } catch (error: any) {
                return res.status(400).json({
                    success: false,
                    errors: error.errors,
                });
            }
        };