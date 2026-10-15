const express = require('express');
const router = express.Router();
const userSchema = require('../schemas/userSchema');
const validate = require('../middleware/validate');

router.post("/", validate(userSchema), (req, res) => {
    const {name, email} = req.validatedBody;

    res.status(201).json({
        success: true,
        message: "User registration data validated successfully",
        user: {
            name,
            email,
        },
    });
});

module.exports = router;