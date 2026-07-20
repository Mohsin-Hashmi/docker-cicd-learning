
import {Router} from "express";
import type { Request, Response } from "express";
const heathRouter = Router();

heathRouter.get("/health", (_req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "Server is healthy, running, working and fast!",
        version: process.env.APP_VERSION ?? "local",
    });
});

export default heathRouter;
