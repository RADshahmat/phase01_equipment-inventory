import type {
    Request,
    Response,
    NextFunction,
} from "express";

import { ZodError } from "zod";

type CustomError = Error & {
    statusCode?: number;
};

export function errorMiddleware(
    err: unknown,
    req: Request,
    res: Response,
    next: NextFunction
) {

    // Zod validation error
    if (err instanceof ZodError) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: err.issues,
        });
    }

    // Normal error
    const error = err as CustomError;

    const statusCode = error.statusCode || 500;

    console.error({
        message: error.message,
        stack: error.stack,
        path: req.originalUrl,
        method: req.method,
        timestamp: new Date().toISOString(),
    });

    return res.status(statusCode).json({
        success: false,
        message:
            statusCode === 500
                ? "Internal Server Error"
                : error.message,
    });
}