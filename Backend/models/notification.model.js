import db from "../config/db.js";

export const getAll = async () => {
    const [rows] = await db.query("SELECT * FROM notifications");
    return rows;
};

export const create = async (data) => {
    const {id, student_id, parent_id, receivable_id, destination_phone, message, send_date} =
        data;

    const [result] = await db.query(
        `INSERT INTO payments (id, student_id, parent_id, receivable_id, destination_phone, message, send_date)
        VALUES (?,?,?,?,?,?,?)`,

        [id, student_id, parent_id, receivable_id, destination_phone, message, send_date]
    );
};