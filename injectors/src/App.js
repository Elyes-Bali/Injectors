import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import { Product } from "./components/products/Product";
import Advices from "./components/advices/Advices";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Info from "./components/info/Info";
import { useState } from "react";
import Logout from "./components/logout/Logout";
import Dashboard from "./components/dashboard/Dashboard";
import UsersDB from "./components/dashboard/UsersDB";
import Messg from "./components/dashboard/Messg";
import PatientRoute from "./components/routes/PatientRoute";
import Adminroute from "./components/routes/Adminroute";
import ProtectedRoutes from "./components/routes/ProtectedRoute";
import Errorpage from "./components/error/Errorpage";

import Chartes from "./components/dashboard/Chartes";
import Children from "./components/children/Children";
import SideBar from "./components/dashboard/SideBar";


function App() {
  const [ping,setPing]=useState(false)
  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin");
  return (
    <div>
      <Navbar ping={ping}/>
    {token && isAdmin &&
      <SideBar />}
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Errorpage />} />
        <Route element={<PatientRoute />}>
        <Route path="/produit" element={<Product   ping={ping} setPing={setPing}/>} />
        <Route path="/mychildren" element={<Children ping={ping} setPing={setPing}/>} />
        </Route>
        <Route path="/advices" element={<Advices />} />
        <Route element={<ProtectedRoutes />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/info" element={<Info />} />
        <Route path="/logout" element={<Logout />} />
        <Route element={<Adminroute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/usersdb" element={<UsersDB ping={ping} setPing={setPing}/>} />
        <Route path="/messdb" element={<Messg />} />
        <Route path="/chart" element={<Chartes/>} />
        </Route>
      </Routes>
    
    </div>
  );
}

export default App;
