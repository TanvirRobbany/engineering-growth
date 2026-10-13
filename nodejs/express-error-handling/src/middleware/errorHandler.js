const AppError = require('../errors/AppError');

const errorHandler = (err, req, res, next) => {
    const statusCode = err instanceof AppError ? err.statusCode : 500;

    const isProduction = process.env.NODE_ENV === "production";

    const message = err instanceof AppError ? err.message : isProduction ? "Internal Server Error" : err.message;

    console.error(err);

    res.status(statusCode).json({
        success: false,
        message,
        ...(!isProduction && {stack: err.stack})
    });
};

module.exports = errorHandler;