import React from "react";
import Navbar from "./component/Navbar";
import { Route, Router, Routes, useLocation } from 'react-router-dom';
import { useState } from "react";
import Home from "./pages/Home";



const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();
  const isOwnerPath = location.pathname.startsWith('/owner');

  return (
    <>
      {!isOwnerPath && <Navbar setShowlogin={setShowLogin} />}
      <Routes>
        <Route path = "/" element = {<Home />} />
      </Routes>

    </>
  );
};

export default App;