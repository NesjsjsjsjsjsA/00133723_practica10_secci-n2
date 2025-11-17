import React, { useState } from "react";
import API from "../utils/api";

const AddSale = () => {
    const [id_customer, set_id_customer] = useState("");
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleAddSale = async (e) => {
        e.preventDefault();
        try {
            await API.post("/sales", { id_customer, amount });
            setSuccess("Sale added successfully!");
            setError("");
        } catch (err) {
            setError(err.response?.data?.message || "Failed to add sale!");
            setSuccess("");
        }
    }

    return (
        <form onSubmit={handleAddSale}>
            <input
                type="id"
                placeholder="Customer ID"
                value={id_customer}
                onChange={(e) => set_id_customer(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button type="submit">Add Sale</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
        </form>
    );

}

export default AddSale;