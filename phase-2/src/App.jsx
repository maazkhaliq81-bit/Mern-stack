import React from "react";
import Navbar from "./component/Navbar";
import { Route, Router, Routes, useLocation } from 'react-router-dom';
import { useState } from "react";
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import Cars from "./pages/Cars";
import MyBookings from "./pages/MyBookings";
import Footer from "./component/Footer";


const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();
  const isOwnerPath = location.pathname.startsWith('/owner');

  return (
    <>
      {!isOwnerPath && <Navbar setShowlogin={setShowLogin} />}
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/car-details/:id" element = {<CarDetails/>} />
        <Route path = "/cars" element = {<Cars/>}/>
        <Route path = "/my-bookings" element = {<MyBookings/>} />
      </Routes>

   { !isOwnerPath && <Footer/>}

    </>
  );
};

export default App;