import express from "express";
import { getAll, createNotification} from "../models/notification.model.js";


const route = express.Router();

route.get("/notification", getAll);
route.post("/notification", createNotification);

export default route;