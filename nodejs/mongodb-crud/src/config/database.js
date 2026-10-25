const mongoose = require('mongoose');

const connectDB = async (uri) => {
    if (!uri) {
        throw new Error('MongoDB URI is required');
    }

    await mongoose.connect(uri);

    console.log("MongoDB connected successfully");
};

const disconnectDB = async () => {
    await mongoose.disconnect();
};

module.exports = { connectDB, disconnectDB };