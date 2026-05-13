// src/middlewares/errorMiddleware.ts

import type { Request, Response, NextFunction } from "express";

export function errorMiddleware(
    err: unknown, // Better than 'any' for strict codebases
    req: Request,
    res: Response,
    next: NextFunction
) {
    // Extract properties safely using type assertions or defaults
    const errorObject = err instanceof Error ? err : new Error(String(err));
    const statusCode = (err as any).statusCode || 500;

    console.error({
        message: errorObject.message,
        stack: errorObject.stack,
        path: req.originalUrl,
        method: req.method,
        timestamp: new Date().toISOString()
    });


    return res.status(statusCode).json({
        success: false,
       message: statusCode === 500 ? "Internal Server Error" : errorObject.message,
    });
}
