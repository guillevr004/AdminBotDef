import db from "../config/db.js";

export const getAll = async () => {
    const [rows] = await db.query("SELECT * FROM atendances");
    return rows;
};

export const create = async (data) => {
    const {id, student_id, date, status, entry_time, leave_time, observation, registered_by_id} =
        data;

    const [result] = await db.query(
        `INSERT INTO payments (id, student_id, date, status, entry_time, leave_time, observation, registered_by_id)
        VALUES (?,?,?,?,?,?,?,?)`,

        [id, student_id, date, status, entry_time, leave_time, observation, registered_by_id]
    );
};