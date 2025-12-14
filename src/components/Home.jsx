import "./Home.css";
import hospitalImage from "../assets/images2.jpeg";

export default function Home() {
  return (
    <div className="home-container">
    
      <div className="home-content">
        <div className="home-card">
          <h1>Welcome to MediCare+ Hospital</h1>
          <p>Your trusted partner for health and wellness.</p>
          <p>
            At MediCare+, we combine compassionate care with advanced medical
            technology to ensure your well-being. Our team of expert doctors,
            nurses, and specialists are dedicated to providing world-class
            healthcare for you and your loved ones.
          </p>
        </div>

        <div className="image-section">
          <img src={hospitalImage} alt="Hospital" />
        </div>
      </div>

      
      <div className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>🏥 General Medicine</h3>
            <p>Comprehensive healthcare for all age groups and conditions.</p>
          </div>
          <div className="service-card">
            <h3>🩺 Specialist Care</h3>
            <p>Expert doctors for cardiology, neurology, pediatrics, and more.</p>
          </div>
          <div className="service-card">
            <h3>💉 Diagnostics</h3>
            <p>Advanced lab testing and medical imaging facilities.</p>
          </div>
          <div className="service-card">
            <h3>🚑 24/7 Emergency</h3>
            <p>Round-the-clock emergency and ambulance services.</p>
          </div>
        </div>
      </div>

  
      <div className="why-choose-section">
        <h2>Why Choose MediCare+</h2>
        <ul>
          <li>*Experienced and qualified doctors</li>
          <li>*State-of-the-art facilities</li>
          <li>*Patient-centered approach</li>
          <li>*Affordable treatment plans</li>
        </ul>
      </div>


      <footer className="home-footer">
        <p>© 2025 MediCare+ Hospital. All rights reserved.</p>
      </footer>
    </div>
  );
}
