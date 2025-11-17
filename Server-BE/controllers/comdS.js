import { pool } from "../BDD/psql.js";

import { getCostumersByID } from "./comdC.js";

export const getSales = async (req, resp) => {
  const results = await pool.query("SELECT s.id, s.amount, s.created_at, c.name FROM sales s JOIN customers c ON s.id_customer = c.id");
  resp.json(results.rows);
};

export const getSalePerClient = async (req, resp) => {
  const results = await pool.query("SELECT c.name, SUM(s.amount) AS total_sales FROM sales s JOIN customers c ON s.id = c.id GROUP BY c.name");
  resp.json(results.rows);
}

export const createSale = async (req, resp) => {

  const { id_customer, amount } = req.body;

  const validSaleId = await getCostumersByID(id_customer);

  if (validSaleId === null) {
    return resp.status(400).json({ message: "Customer ID is not valid" });
  }

  const results = await pool.query(
    "INSERT INTO sales (amount, created_at, id_customer) VALUES ($1, NOW(), $2) RETURNING *",
    [amount, id_customer]
  );

  resp.status(201).json(results.rows[0]);
};


