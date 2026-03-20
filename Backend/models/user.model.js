import db from "../config/db.js";

export const getAll = async () => {
    const [rows] = await db.query("SELECT * FROM users");
    return rows;
};

export const create = async (data) => {
    const {id, first_name, last_name, email, password_hash, phone_number} =
        data;

    const [result] = await db.query(
        `INSERT INTO users (id, first_name, last_name, email, password_hash, phone_number)
        VALUES (?,?,?,?,?,?)`,
        [id, first_name, last_name, email, password_hash, phone_number]
    );
};