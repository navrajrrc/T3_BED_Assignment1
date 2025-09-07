import express, { Express, Request, Response } from "express";

const app: Express = express();

interface HealthCheckResponse {
    status:string;
    uptime: number;
    timestamp:string;
    version: string;
}

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

app.get("/api/v1/health", (req:Request, res: Response) => {
    const healthData: HealthCheckResponse = {
        status: "OK",
        uptime:process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    };

    res.json(healthData);
})

export default app;