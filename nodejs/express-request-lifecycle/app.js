const express = require('express');
const app = express();
const PORT = 3000;

// Middleware 1
app.use((req, res, next) => {
    console.log("Middleware 1: Request received");
    req.customMessage = "Hello from Middleware!"
    next();
});

// Middleware 2
app.use((req, res, next) => {
    console.log("Middleware 2: Processing request");
    next();
});

// Middleware 3
app.use((req, res, next) => {
    console.log("Blocking request!")

    res.status(403).json({
        message: "Blocked!",
    });
});

// Route Handler
app.get("/", (req, res) => {
    console.log("Route handler executed");


    res.json({
        message: req.customMessage,
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});