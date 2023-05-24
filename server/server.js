import connectDB from "./mongodb.js";
import app from "./app.js";
connectDB();

app.listen(5000, () => {
  console.log(`server is listening on port  http://localhost:/${5000}`);
});

app.get("/", (req, res) => {
  res.json({
    message: "working fine",
  });
});
