import React, { useState, useEffect } from "react";
import API from "../../utils/api";

const SaleList = () => {
    const [sales, setSales] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await API.get("/sales");
                setSales(response.data);
            } catch (err) {
                setError(err.response?.data?.message || "Failed to fetch customers!");
            }
        };

        fetchCustomers();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>ID |</th>
                    <th> | Venta | </th>
                    <th> | Creación |</th>
                    <th>| Cliente | </th>
                </tr>
            </thead>
            <tbody>
                {sales.map((c) => (
                    <tr key={c.id}>
                        <td>{c.id}</td>
                        <td>{c.amount}</td>
                        <td>{c.created_at}</td>
                        <td>{c.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

}

export default SaleList;