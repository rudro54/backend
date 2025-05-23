import express, { Request, Response } from "express";
import cors from 'cors';
import router from "./routes/products";
import productRouter from "./routes/products";
import reviewRouter from "./routes/reviews";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000; // <--- THIS IS CRITICAL

app.use(cors());
app.use(express.json());
app.use(reviewRouter);
app.use(productRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
