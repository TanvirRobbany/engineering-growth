const test = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");

const app = require("../src/app");

test("GET /api/success returns HTTP 200", async () => {
  const response = await request(app).get("/api/success");

  assert.equal(response.status, 200);
  assert.equal(response.body.success, true);
  assert.equal(response.body.message, "Request successful!");
});

test("GET /api/not-found returns HTTP 404", async () => {
  const response = await request(app).get("/api/not-found");

  assert.equal(response.status, 404);
  assert.equal(response.body.success, false);
  assert.equal(response.body.message, "Resource not found");
});

test("GET /api/unauthorized returns HTTP 401", async () => {
  const response = await request(app).get("/api/unauthorized");

  assert.equal(response.status, 401);
  assert.equal(response.body.success, false);
  assert.equal(response.body.message, "Unauthorized access");
});

test("GET /api/server-error returns HTTP 500", async () => {
  const response = await request(app).get("/api/server-error");

  assert.equal(response.status, 500);
  assert.equal(response.body.success, false);
});

test("GET /api/async-error returns HTTP 500", async () => {
  const response = await request(app).get("/api/async-error");

  assert.equal(response.status, 500);
  assert.equal(response.body.success, false);
});

test("Unexpected errors should hide internal details in production", async () => {
  const originalEnv = process.env.NODE_ENV;

  try {
    process.env.NODE_ENV = "production";

    const response = await request(app).get("/api/server-error");

    assert.equal(response.status, 500);
    assert.equal(response.body.success, false);
    assert.equal(response.body.message, "Internal Server Error");
    assert.equal(response.body.stack, undefined);
  } finally {
    if (originalEnv === undefined) {
      delete process.env.NODE_ENV;
    } else {
      process.env.NODE_ENV = originalEnv;
    }
  }
});