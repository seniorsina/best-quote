import mongoose from "mongoose";
import { seedAuthors } from "./authors.seeds";
import { seedUsers } from "./user.seeds";

const seedDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/best-quotes", {});
    console.log("Connected to MongoDB");

    await Promise.all([seedAuthors(), seedUsers()]);

    console.log("Database seeding completed.");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
};

seedDatabase();
