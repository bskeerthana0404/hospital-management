
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
