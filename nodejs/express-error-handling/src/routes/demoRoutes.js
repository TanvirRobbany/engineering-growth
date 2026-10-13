const express = require('express');
const AppError = require('../errors/AppError');

const router = express.Router();

// Success Route
router.get("/success", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Request successful!"
    });
});

// Operational error - 404
router.get("/not-found", (req, res, next) => {
    next(new AppError("Resource not found", 404));
});

// Operational error - 401
router.get("/unauthorized", (req, res, next) => {
    next (new AppError("Unauthorized access", 401));
});

// Unexpected server error
router.get("/server-error", (req, res, next) => {
    next(new Error("Unexpected database failure"));
});

// Aync error
router.get("/async-error", async (req, res, next) => {
    try {
        await Promise.reject(new Error("Async operation failed"));
    } catch (error) {
        next(error);
    }
});

module.exports = router;
