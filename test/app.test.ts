import request, { Response }from "supertest";

import app from "../src/app";

describe("GET /", () => {
    it("should return Hello World", async () => {
        const response: Response = await request(app).get("/")
        
        expect(response.text).toBe("Hello World");
    
    });
})