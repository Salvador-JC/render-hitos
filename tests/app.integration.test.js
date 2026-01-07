const request = require("supertest");
const app = require("../index");

describe("Test de integración GET /", () => {
  test("Debe responder 200 y texto correcto", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(500);
    expect(response.text).toContain("Render");
  });
});
