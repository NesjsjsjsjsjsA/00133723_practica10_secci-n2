import { pool } from "../../BDD/psql.js";

export const getCostumersByID = async (id_customer) => {
  const { rows } = await pool.query(
    "SELECT id FROM customers WHERE id = $1",
    [id_customer]
  );

  return rows.length > 0 ? rows[0].id : null;
};

export const addCustomer = async (name, address, phone, code) => {
  const results = await pool.query(
    "INSERT INTO customers (name, address, phone, code) VALUES ($1, $2, $3, $4) RETURNING *",
    [name, address, phone, code]
  );
  return results.rows[0];
}