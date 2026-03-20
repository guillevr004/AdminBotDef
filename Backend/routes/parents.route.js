import express from "express";
import { getAll, createParent} from "../models/parent.model.js";

const route = express.Router();

route.get("/parent", getAll);
route.post("/parent", createParent);

export default route;