import express from "express";
import { getAll, createPayment} from "../models/payment.model.js";


const route = express.Router();

route.get("/payment", getAll);
route.post("/payment", createPayment);

export default route;