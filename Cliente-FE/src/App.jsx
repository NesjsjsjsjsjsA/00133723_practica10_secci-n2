//import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/login"
import CustomerList from "./components/customer/CustomerList.jsx";
import Customer_Sale from "./components/customer/Customer_Sale.jsx";
import SaleList from "./components/sale/Sale_List.jsx";
import ClientSale from "./components/sale/Client_Sale.jsx";

import Button from "./components/Buttons/Button.jsx";

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