import React from 'react'
import Home from './pages/Home'
import FindBlood from "./pages/FindBlood";
import BecomeDonor from "./pages/BecomeDonor";
import BloodRequest from "./pages/BloodRequest";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/find-blood" element={<FindBlood />} />
          <Route path="/become-donor" element={<BecomeDonor />} />
          <Route path="/blood-request" element={<BloodRequest />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App