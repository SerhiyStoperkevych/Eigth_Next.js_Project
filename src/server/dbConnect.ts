import mongoose from "mongoose";

const MONGODB_URI = "mongodb://localhost:27017/crud";

if (!MONGODB_URI) {
    throw new Error('Error with connection to MONGODB')
};

let cached = global.mongoose as any;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = { bufferCommands: false };

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default dbConnect;