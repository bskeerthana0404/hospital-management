/*export default function FindDoctor() {
  const doctors = [
    { name: "Dr. Aishwarya Rao", specialty: "Cardiologist" },
    { name: "Dr. Vikram Kumar", specialty: "Neurologist" },
    { name: "Dr. Meena Patel", specialty: "Dermatologist" },
    { name: "Dr. Rakesh Sharma", specialty: "General Physician" },
  ];

  return (
    <div className="find-doctor">
      <h2>Find Doctor</h2>
      <ul>
        {doctors.map((doc, i) => (
          <li key={i}>
            <strong>{doc.name}</strong> – {doc.specialty}
          </li>
        ))}
      </ul>
    </div>
  );
}
*/
/*import "./FindDoctor.css";
import doc1 from "../assets/doc1.jpeg";
import doc2 from "../assets/doc2.jpeg";
import doc3 from "../assets/doc3.jpeg";

export default function FindDoctor() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      specialty: "Cardiologist",
      experience: "10 years",
      image: doc1,
    },
    {
      id: 2,
      name: "Dr. Arjun Mehta",
      specialty: "Neurologist",
      experience: "8 years",
      image: doc2,
    },
    {
      id: 3,
      name: "Dr. Sneha Patel",
      specialty: "Pediatrician",
      experience: "6 years",
      image: doc3,
    },
  ];

  return (
    <div className="find-doctor-container">
      <h1>Our Expert Doctors 👨‍⚕️👩‍⚕️</h1>
      <p>Meet our experienced medical professionals ready to care for you.</p>

      <div className="doctor-grid">
        {doctors.map((doctor) => (
          <div className="doctor-card" key={doctor.id}>
            <img src={doctor.image} alt={doctor.name} />
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
            <span>Experience: {doctor.experience}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
*/
import "./FindDoctor.css";
import doc1 from "../assets/doc2.jpeg";
import doc2 from "../assets/doc1.jpeg";
import doc3 from "../assets/doc3.jpeg";

export default function FindDoctor() {
  const doctors = [
    {
      name: "Dr. Priya Sharma",
      specialty: "Cardiologist",
      experience: "10 years",
      image: doc1,
    },
    {
      name: "Dr. Arjun Mehta",
      specialty: "Neurologist",
      experience: "8 years",
      image: doc2,
    },
    {
      name: "Dr. Sneha Patel",
      specialty: "Pediatrician",
      experience: "6 years",
      image: doc3,
    },
  ];

  return (
    <div className="doctors-container">
      <h2>Our Expert Doctors 👨‍⚕️👩‍⚕️</h2>
      <p>Meet our experienced medical professionals ready to care for you.</p>

      <div className="doctor-grid">
        {doctors.map((doc, index) => (
          <div key={index} className="doctor-card">
            <img src={doc.image} alt={doc.name} />
            <h3>{doc.name}</h3>
            <p className="specialty">{doc.specialty}</p>
            <p>Experience: {doc.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
