import { getAll, create } from "../models/parent.model.js";
import { randomUUID } from "crypto";

export const getParent = async (req, res) => {
    try{
        const data = await getAll();
        res.status(200).json(data);
    } catch{
        res.status(500).json({ message: "Algo Paso", err: error });
    }
};

export const createParent = async (req, res) => {
    try{
        const newParent = {
            id: randomUUID(),
            ...req.body
        };

        await create(newParent)
        res.status(201).json({ message: "Parent Created" });
    } catch (error) {
        res.status(500).json({ message: "Error Al Crear", err: error });
    }
};