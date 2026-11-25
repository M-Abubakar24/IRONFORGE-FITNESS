
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Send,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend demonstration only.
    // Backend integration will be added later.
    setSubmitted(true);
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <span className="contact-eyebrow">
          WE'RE HERE TO HELP
        </span>

        <h1>
          LET'S START
          <br />
          <span>A CONVERSATION.</span>
        </h1>

        <p>
          Have questions about memberships, training programs,
          or getting started? We'd love to hear from you.
        </p>

        <a href="#contact-content" className="contact-primary-btn">
          GET IN TOUCH
          <ArrowRight size={19} />
        </a>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-section" id="contact-content">

        <div className="contact-heading">
          <span className="contact-eyebrow">CONTACT IRONFORGE</span>
          <h2>
            WE'RE JUST A <span>MESSAGE AWAY.</span>
          </h2>
        </div>

        <div className="contact-layout">

          {/* INFORMATION */}
          <div className="contact-info">

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <MapPin size={24} />
              </div>
              <div>
                <h3>OUR LOCATION</h3>
                <p>
                  Gulberg III, Lahore, Punjab, Pakistan.
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Phone size={24} />
              </div>
              <div>
                <h3>PHONE NUMBER</h3>
                <p>
                  <a href="tel:03334150299">
                    03334150299
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Mail size={24} />
              </div>
              <div>
                <h3>EMAIL ADDRESS</h3>
                <p>
                  <a href="mailto:muhammad.abubakar241996@gmail.com">
                    muhammad.abubakar241996@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Clock size={24} />
              </div>
              <div>
                <h3>OPENING HOURS</h3>
                <p>Monday – Saturday</p>
                <p>12pm - 12am</p>
              </div>
            </div>

            <div className="contact-social">
              <h3>LET'S CONNECT</h3>
              <p>
                Follow our journey and stay updated with
                everything happening at IRONFORGE.
              </p>

              <div className="contact-social-links">
                <a href="#contact-content" aria-label="Instagram">
                  Instagram
                </a>
                <a href="#contact-content" aria-label="Facebook">
                  Facebook
                </a>
              </div>
            </div>

          </div>

          {/* CONTACT FORM */}
          <div className="contact-form-wrapper">

            <div className="contact-form-heading">
              <span className="contact-eyebrow">SEND US A MESSAGE</span>
              <h3>HOW CAN WE HELP?</h3>
              <p>
                Fill out the form below and tell us what you're
                looking for.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">YOUR NAME</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">EMAIL ADDRESS</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">SUBJECT</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">YOUR MESSAGE</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact-submit-btn">
                SEND MESSAGE
                <Send size={18} />
              </button>

              {submitted && (
                <p className="contact-demo-message">
                  Form validation successful! Message delivery will
                  be enabled when the backend is connected.
                </p>
              )}

            </form>
          </div>

        </div>
      </section>

      {/* LOCATION */}
      <section className="contact-location">
        <div className="contact-location-content">
          <span className="contact-eyebrow">FIND YOUR WAY TO US</span>

          <h2>
            YOUR NEXT WORKOUT
            <br />
            <span>STARTS HERE.</span>
          </h2>

          <p>
            Visit IRONFORGE FITNESS CLUB and take the first step
            towards a stronger you.
          </p>

          <div className="contact-location-placeholder">
            <MapPin size={35} />
            <span>IRONFORGE FITNESS CLUB</span>
            <small>
              GULBERG III, LAHORE, PAKISTAN
            </small>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Gulberg+III+Lahore+Pakistan"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-primary-btn"
          >
            GET DIRECTIONS
            <ArrowRight size={19} />
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="contact-cta">
        <MessageCircle size={35} />

        <h2>
          READY TO <span>GET STRONGER?</span>
        </h2>

        <p>
          Your fitness journey deserves a strong beginning.
          Let's make it happen.
        </p>

        <a href="#contact-content" className="contact-primary-btn">
          TALK TO US
          <ArrowRight size={19} />
        </a>
      </section>

    </main>
  );
};

export default Contact;
