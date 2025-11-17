import { pool } from "../../BDD/psql.js";

export const getCostumers = async (req, resp) => {
  const results = await pool.query("SELECT * FROM customers");
  resp.json(results.rows);
};


export const getUserByID = async (req, resp) => {
  const { id } = req.params;
  const results = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  resp.json(results.rows[0]);
};

export const getCustomerByCode = async (req, resp) => {
    const { code } = req.params;
  const results = await pool.query("SELECT * FROM customers WHERE code = $1", [code]);
  resp.json(results.rows[0]);
}



