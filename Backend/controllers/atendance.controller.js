import { getAll, create } from "../models/atendance.model.js";
import { randomUUID } from "crypto";

export const getAtendance = async (req, res) => {
    try{
        const data = await getAll();
        res.status(200).json(data);
    } catch{
        res.status(500).json({ message: "Algo Paso", err: error });
    }
};

export const createAtendance = async (req, res) => {
    try{
        const newAtendance = {
            id: randomUUID(),
            ...req.body
        };

        await create(newAtendance)
        res.status(201).json({ message: "Atendance Created" });
    } catch (error) {
        res.status(500).json({ message: "Error Al Crear", err: error });
    }
};