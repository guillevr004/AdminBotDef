import express from "express";
import { getAll, createUser} from "../models/user.model.js";


const route = express.Router();

route.get("/user", getAll);
route.post("/user", createUser);

export default route;