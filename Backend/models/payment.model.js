import db from "../config/db.js";

export const getAll = async () => {
    const [rows] = await db.query("SELECT * FROM payments");
    return rows;
};

export const create = async (data) => {
    const {id, receivable_id, registered_by_id, payment_date, amount_paid, payment_method, reference} =
        data;

    const [result] = await db.query(
        `INSERT INTO payments (id, receivable_id, registered_by_id, payment_date, amount_paid,
        payment_method, reference) VALUES (?,?,?,?,?,?,?)`,

        [id, receivable_id, registered_by_id, payment_date, amount_paid, payment_method, reference]
    );
};