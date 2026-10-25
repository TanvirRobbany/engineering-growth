const test = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

const app = require("../src/app");
const User = require("../src/models/user.model");

let mongoServer;

test.before(async () => {
  mongoServer = await MongoMemoryServer.create();

  await mongoose.connect(mongoServer.getUri());

  await User.init();
});

test.beforeEach(async () => {
  await User.deleteMany({});
});

test.after(async () => {
  await mongoose.disconnect();

  if (mongoServer) {
    await mongoServer.stop();
  }
});

test("Create user returns HTTP 201", async () => {
  const response = await request(app)
    .post("/api/users")
    .send({
      name: "Tanvir",
      email: "tanvir@example.com",
      age: 25,
    });

  assert.equal(response.status, 201);
  assert.equal(response.body.success, true);
  assert.equal(response.body.data.name, "Tanvir");
});

test("Get users returns stored users", async () => {
  await User.create({
    name: "Tanvir",
    email: "tanvir@example.com",
  });

  const response = await request(app).get("/api/users");

  assert.equal(response.status, 200);
  assert.equal(response.body.data.length, 1);
});

test("Duplicate email returns HTTP 409", async () => {
  const payload = {
    name: "Tanvir",
    email: "tanvir@example.com",
  };

  await request(app).post("/api/users").send(payload);

  const response = await request(app)
    .post("/api/users")
    .send(payload);

  assert.equal(response.status, 409);
});

test("Invalid user ID returns HTTP 400", async () => {
  const response = await request(app).get("/api/users/invalid-id");

  assert.equal(response.status, 400);
});

test("Update user returns modified data", async () => {
  const user = await User.create({
    name: "Tanvir",
    email: "tanvir@example.com",
  });

  const response = await request(app)
    .patch(`/api/users/${user._id}`)
    .send({
      name: "Tanvir Ahmed",
    });

  assert.equal(response.status, 200);
  assert.equal(response.body.data.name, "Tanvir Ahmed");
});

test("Delete user removes document", async () => {
  const user = await User.create({
    name: "Tanvir",
    email: "tanvir@example.com",
  });

  const response = await request(app).delete(
    `/api/users/${user._id}`
  );

  assert.equal(response.status, 200);

  const deletedUser = await User.findById(user._id);

  assert.equal(deletedUser, null);
});