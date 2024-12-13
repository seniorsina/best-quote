import mongoose from "mongoose";
import config from "config";
import { error } from "winston";
import debug from "debug";

const log : debug.Debugger = debug.debug("app:database");

const connectDB = async ():Promise<void> => {
  try {
    const uri: string = config.get<string>("db.connectionString");

    await mongoose.connect(uri);
    log("connected to mongodb successfully");
  } catch (err) {
    log("Error connection to Mongodb:", error);
    process.exit(1);
  }
};

export default connectDB;
