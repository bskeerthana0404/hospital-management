// src/components/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, User, Phone } from "lucide-react";
//import "./Sidebar.css";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "Book Appointment", path: "/book", icon: <Calendar size={18} /> },
    { name: "Find Doctor", path: "/doctors", icon: <User size={18} /> },
    { name: "Contact Us", path: "/contact", icon: <Phone size={18} /> },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png"
          alt="logo"
          className="logo"
        />
        <h2>MediCare+</h2>
        <p>Your Health, Our Priority</p>
      </div>

      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`menu-item ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            <Link to={item.path}>
              <span className="icon">{item.icon}</span>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
