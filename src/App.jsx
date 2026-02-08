import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import BookAppointment from "./components/BookAppointment";
import FindDoctor from "./components/FindDoctor";
import ContactUs from "./components/ContactUs";
import "./App.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="app-container">
        {isLoggedIn && <Sidebar />}

        <div className={`main-content ${isLoggedIn ? "with-sidebar" : ""}`}>
          <Routes>
            {!isLoggedIn ? (
              <>
                <Route
                  path="/"
                  element={<Login onLogin={() => setIsLoggedIn(true)} />}
                />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/book" element={<BookAppointment />} />
                <Route path="/doctors" element={<FindDoctor />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}
