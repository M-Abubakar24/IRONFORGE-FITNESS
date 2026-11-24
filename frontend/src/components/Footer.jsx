
import { Dumbbell, Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">

        <div className="footer-brand">
          <h2>
            <Dumbbell />
            IRONFORGE<span>.</span>
          </h2>
          <p>FORGED BY DISCIPLINE. BUILT FOR STRENGTH.</p>
          <p>
            Building stronger bodies and stronger mindsets,
            one workout at a time.
          </p>
        </div>

        <div>
          <h3>QUICK LINKS</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/membership">Membership</Link>
        </div>

        <div>
          <h3>CONTACT</h3>
          <p><MapPin size={16} /> Lahore, Pakistan</p>
          <p><Phone size={16} /> Contact number coming soon</p>
          <p><Mail size={16} /> Email coming soon</p>
        </div>

        <div>
          <h3>FOLLOW US</h3>

          <div className="social-links">
            <a href="#" aria-label="Instagram">
              <FaInstagram size={22} />
            </a>

            <a href="#" aria-label="Facebook">
              <FaFacebookF size={22} />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} IRONFORGE FITNESS CLUB.
          All rights reserved.
        </span>
        <span>FORGED BY DISCIPLINE.</span>
      </div>
    </footer>
  );
};

export default Footer;
