
import "./BookAppointment.css";
import { useState } from "react";

export default function BookAppointment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [doctor, setDoctor] = useState("");
  const [loading, setLoading] = useState(false);

  const doctors = [
    { id: 1, name: "Dr. Priya Sharma (Cardiologist)" },
    { id: 2, name: "Dr. Arjun Mehta (Neurologist)" },
    { id: 3, name: "Dr. Sneha Patel (Pediatrician)" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !date || !doctor) {
      alert("⚠️ Please fill all fields before submitting.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, date, doctor }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`✅ Appointment booked with ${doctor}!`);
        setName("");
        setEmail("");
        setDate("");
        setDoctor("");
      } else {
        alert(`❌ ${data.message || "Failed to book appointment."}`);
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Something went wrong. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="appointment-container">
      <div className="appointment-card">
        <h2>Book an Appointment 🩺</h2>
        <p>Fill out the form below to schedule your visit.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <select value={doctor} onChange={(e) => setDoctor(e.target.value)}>
            <option value="">-- Select Doctor --</option>
            {doctors.map((doc) => (
              <option key={doc.id} value={doc.name}>
                {doc.name}
              </option>
            ))}
          </select>

          <button type="submit" disabled={loading}>
            {loading ? "Booking..." : "Book Appointment"}
          </button>
        </form>
      </div>
    </div>
  );
}
