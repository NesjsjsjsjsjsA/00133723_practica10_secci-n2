import React, { useState } from "react";
import API from "../../utils/api";

const AddSale = () => {
    const [id_customer, set_id_customer] = useState("");
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleAddSale = async (e) => {
        e.preventDefault();
        try {
            await API.post("/sales", { id_customer, amount });
            setSuccess("Se ha añadido la venta correctamente!");
            setError("");
        } catch (err) {
            setError(err.response?.data?.message || "Hay un error en algo!");
            setSuccess("");
        }
    }

    return (
        <form style={{textAlign: "center"}} onSubmit={handleAddSale}>
            <h1>Añadir una venta</h1>
            <input
                style={{marginLeft: "10px"}}
                type="id"
                placeholder="Customer ID"
                value={id_customer}
                onChange={(e) => set_id_customer(e.target.value)}
            />
            <input
                style ={{ marginLeft: "10px" }}
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <p></p>
            <button style={{backgroundColor: "#4CAF50", color: "white", padding: "10px 10px", border: "none", borderRadius: "10px", cursor: "progress" }} type="submit"> Añadir una Sale! </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
        </form>
    );

}

export default AddSale;