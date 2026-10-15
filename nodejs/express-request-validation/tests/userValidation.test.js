const test = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");

const app = require("../src/app");

test("Valid user data returns HTTP 201", async () => {
  const response = await request(app)
    .post("/api/users")
    .send({
      name: "Tanvir",
      email: "tanvir@example.com",
      password: "StrongPass123",
    });

  assert.equal(response.status, 201);
  assert.equal(response.body.success, true);
  assert.equal(response.body.user.name, "Tanvir");
  assert.equal(response.body.user.email, "tanvir@example.com");
  assert.equal(response.body.user.password, undefined);
});

test("Invalid email returns HTTP 400", async () => {
  const response = await request(app)
    .post("/api/users")
    .send({
      name: "Tanvir",
      email: "invalid-email",
      password: "StrongPass123",
    });

  assert.equal(response.status, 400);
  assert.equal(response.body.success, false);

  assert.ok(
    response.body.errors.some((error) => error.field === "email")
  );
});

test("Missing fields return HTTP 400", async () => {
  const response = await request(app)
    .post("/api/users")
    .send({});

  assert.equal(response.status, 400);
  assert.equal(response.body.success, false);
  assert.equal(response.body.errors.length, 3);
});

test("Name is trimmed before being returned", async () => {
  const response = await request(app)
    .post("/api/users")
    .send({
      name: "  Tanvir  ",
      email: "tanvir@example.com",
      password: "StrongPass123",
    });

  assert.equal(response.status, 201);
  assert.equal(response.body.user.name, "Tanvir");
});

test("Short passwords return HTTP 400", async () => {
  const response = await request(app)
    .post("/api/users")
    .send({
      name: "Tanvir",
      email: "tanvir@example.com",
      password: "123",
    });

  assert.equal(response.status, 400);

  assert.ok(
    response.body.errors.some((error) => error.field === "password")
  );
});