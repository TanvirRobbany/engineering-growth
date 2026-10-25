const express = require("express");

const controller = require("../controllers/user.controller");

const validate = require("../middleware/validate");

const {
  createUserSchema,
  updateUserSchema,
} = require("../schemas/user.schema");

const router = express.Router();

router.post("/", validate(createUserSchema), controller.createUser);

router.get("/", controller.getUsers);

router.get("/:id", controller.getUserById);

router.patch(
  "/:id",
  validate(updateUserSchema),
  controller.updateUser
);

router.delete("/:id", controller.deleteUser);

module.exports = router;