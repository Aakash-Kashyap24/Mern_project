import express from "express";
import bodyParser from "body-parser"; 
import cors from "cors";
import { createProduct, getProduct, updateProduct } from "./controller.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


app.get("/getproducts", getProduct);
app.post("/add", createProduct);

app.put("/edit", updateProduct);


export default app;
