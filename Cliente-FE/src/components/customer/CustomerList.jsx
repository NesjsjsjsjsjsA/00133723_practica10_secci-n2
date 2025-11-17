import React, { useState, useEffect } from "react";
import API from "../../utils/api";

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await API.get("/customers");
                setCustomers(response.data);
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
                    <th> | Nombre |</th>
                    <th> | Dirección |</th>
                    <th> | Teléfono |</th>
                    <th> | Código |</th>
                </tr>
            </thead>
            <tbody>
                {customers.map((c) => (
                    <tr key={c.id}>
                        <td>{c.id}</td>
                        <td>{c.name}</td>
                        <td>{c.address}</td>
                        <td>{c.phone}</td>
                        <td>{c.code}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

}

export default CustomerList;