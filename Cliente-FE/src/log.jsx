import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import Login from "./components/login"
import CustomerList from "./components/customer/CustomerList.jsx";
import Customer_Sale from "./components/customer/Customer_Sale.jsx";
import SaleList from "./components/sale/Sale_List.jsx";
import ClientSale from "./components/sale/Client_Sale.jsx";
import Nav from "./NavApp.jsx";

const Log = () => (
  <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log" element={<Login />} />
        <Route path="/customers" element = {<CustomerList/>} />
        <Route path="/add-sale" element={<Customer_Sale />} />
        <Route path="/sales" element={<SaleList />} />
        <Route path="/sales-per-client" element={<ClientSale />} />
    </Routes>
    <Nav/>
  </Router>    
)

export default Log