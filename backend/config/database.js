import mongoose from "mongoose";

const connectDb = async (DBURL) => {
  try {
    await mongoose.connect(DBURL, {
      dbName: "advancAuth",
    });
    console.log("Database Connected Successfully")
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
