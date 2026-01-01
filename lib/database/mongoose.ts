import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}
declare global {
  var mongoose: MongooseConnection | undefined;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}
export const connectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn;
  }
  if (!MONGODB_URL) {
    throw new Error ("MONGODB_URL is not defined");
  }
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
        dbName: "abhi", bufferCommands: false });

        cached.conn = await cached.promise;
        return cached.conn;
};
