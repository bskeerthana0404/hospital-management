
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        
        <div className="contact-info">
          <h2>Get in Touch 💬</h2>
          <p>
            We’d love to hear from you! Whether you have questions about our
            doctors, appointments, or services — our team is ready to help.
          </p>

          <div className="info-details">
            <p>📍 123 MediCare+ Street, Chennai, India</p>
            <p>📞 +91 98765 43210</p>
            <p>📧 support@medicareplus.com</p>
          </div>

          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

       
        <div className="contact-form">
          <h3>Send us a Message 📨</h3>
          <form>
            <input type="text" placeholder="Your Full Name" required />
            <input type="email" placeholder="Your Email Address" required />
            <textarea placeholder="Your Message..." rows="4" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

