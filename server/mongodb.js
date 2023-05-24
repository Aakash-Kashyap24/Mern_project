import mongoose from "mongoose";


const dbUrl =
  "mongodb+srv://akashuiuxd:1RTQC43xjcud0ctE@cluster0.cfhufwr.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected bri");
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }

  const db = mongoose.connection;

  db.on("error", (error) => {
    console.error("MongoDB connection error:", error);
  });

  db.once("open", () => {
    console.log("MongoDB connected");
  });
};
export default connectDB;
