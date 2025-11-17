import React, { useState, useEffect } from "react";
import API from "../../utils/api";

const ClientSale = () => {
    const [sale, setSale] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await API.get("/sales-per-client");
                setSale(response.data);
            } catch (err) {
                setError(err.response?.data?.message || "Failed to fetch customers!");
            }
        };

        fetchCustomers();
    }, []);

    return (
        <table style={{ marginTop: "1px", border: "1px white"}}> 
            <caption><h1> Ventas por cliente </h1></caption>
            <thead>
                <tr>
                    <th> | Cliente |</th>
                    <th> | Total Ventas |</th>
                </tr>
            </thead>
            <tbody style={{backgroundColor: "#96D4D4", border: "1px white", textAlign: "center", color: "black"}}>
                {sale.map((c) => (
                    <tr key={c.id}>
                        <td>{c.name}</td>
                        <td>{c.total_sales}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

}

export default ClientSale;