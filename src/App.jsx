import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
// import Gallery from "./Gallery/Gallery";
import Home from "./appointment/Pages/Home";
import Legal from "./appointment/Pages/Legal";
import Appointment from "./appointment/Pages/Appointment";
import Register from "./appointment/Components/Register";
import AppointmentDetails from "./appointment/Components/AppointmentDetails";
import NotFound from "./appointment/Pages/NotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/register" element={<Register />} />
        <Route path="/appointment-details" element={<AppointmentDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
