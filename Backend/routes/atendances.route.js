import express from "express";
import { getAll, createAtendance} from "../models/atendance.model.js";


const route = express.Router();

route.get("/atendance", getAll);
route.post("/atendance", createAtendance);

export default route;