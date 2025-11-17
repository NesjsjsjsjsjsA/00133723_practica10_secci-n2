//import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login"
import CustomerList from "./components/CustomerList";
import Customer_Sale from "./components/Customer_Sale";
import SaleList from "./components/Sale_List";
import ClientSale from "./components/Client_Sale";

const App = () => (
  <Router>
    <Routes>
      <Route path="/log" element={<Login />} />
      <Route path="/customers" element={<CustomerList />} />
      <Route path="/add-sale" element={<Customer_Sale />} />
      <Route path="/sales" element={<SaleList />} />
      <Route path="/sales-per-client" element={<ClientSale />} />

    </Routes>
  </Router>
);

export default App;