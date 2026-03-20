import db from "../config/db.js";

export const getAll = async () => {
    const [rows] = await db.query("SELECT * FROM parents");
    return rows;
};

export const create = async (data) => {
    const {id, first_name, last_name, phone_number, email, adress} =
        data;

    const [result] = await db.query(
        `INSERT INTO parents (id, first_name, last_name, phone_number, email, adress)
        VALUES (?,?,?,?,?,?)`,
        [id, first_name, last_name, phone_number, email, adress]
    );
};