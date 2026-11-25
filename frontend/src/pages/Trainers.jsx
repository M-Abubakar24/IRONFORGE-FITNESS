
import { useState } from "react";
import {
  ArrowRight,
  Award,
  Dumbbell,
  X,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const trainers = [
  {
    id: 1,
    name: "SHAHZAIB SHAHID",
    role: "HEAD STRENGTH COACH",
    specialty: "Strength & Muscle Building",
    experience: "8+ YEARS",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=900",
    description:
      "Focused on progressive strength training, muscle development, and building sustainable fitness habits.",
    certifications: ["Strength Training", "Hypertrophy", "Fitness Coaching"],
  },
  {
    id: 2,
    name: "AHMED HUSSAIN",
    role: "FITNESS SPECIALIST",
    specialty: "Fat Loss & Conditioning",
    experience: "6+ YEARS",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900",
    description:
      "Helps members improve conditioning, build strength, and work toward realistic body-composition goals.",
    certifications: ["Conditioning", "Weight Management", "HIIT"],
  },
  {
    id: 3,
    name: "SOPHIA JOHN",
    role: "PERSONAL TRAINER",
    specialty: "Functional Fitness",
    experience: "5+ YEARS",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900",
    description:
      "Specializes in functional movement, mobility, and helping members develop confidence in their training.",
    certifications: ["Functional Training", "Mobility", "Core Training"],
  },
  {
    id: 4,
    name: "HAMZA MANSOOR",
    role: "PERFORMANCE COACH",
    specialty: "Athletic Performance",
    experience: "7+ YEARS",
    image:
      "https://images.unsplash.com/photo-1534368270820-9de3d8053204?w=900",
    description:
      "Works on athletic conditioning, performance development, and structured training progression.",
    certifications: ["Performance Training", "Endurance", "Strength"],
  },
];

const Trainers = () => {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  return (
    <main className="trainers-page">
      {/* HERO SECTION */}
      <section className="trainers-hero">
        <div className="trainers-hero-content">
          <span className="trainers-eyebrow">
            MEET THE PEOPLE BEHIND YOUR PROGRESS
          </span>

          <h1>
            TRAIN WITH THE
            <br />
            <span>BEST.</span> BECOME YOUR BEST.
          </h1>

          <p>
            Great results start with great guidance. Meet the
            coaches dedicated to helping you build strength,
            confidence, and consistency.
          </p>

          <a href="#our-trainers" className="trainers-primary-btn">
            MEET OUR TRAINERS
            <ArrowRight size={19} />
          </a>
        </div>

        <div className="trainers-hero-stats">
          <div>
            <strong>01</strong>
            <span>EXPERT GUIDANCE</span>
          </div>
          <div>
            <strong>02</strong>
            <span>PERSONAL APPROACH</span>
          </div>
          <div>
            <strong>03</strong>
            <span>REAL PROGRESS</span>
          </div>
        </div>
      </section>

      {/* TRAINERS SECTION */}
      <section className="trainers-section" id="our-trainers">
        <div className="trainers-heading">
          <span className="trainers-eyebrow">OUR FITNESS EXPERTS</span>

          <h2>
            MEET YOUR <span>COACHES.</span>
          </h2>

          <p>
            Experienced professionals. Individual guidance.
            One shared commitment to helping you get stronger.
          </p>
        </div>

        <div className="trainers-grid">
          {trainers.map((trainer) => (
            <article className="trainer-card" key={trainer.id}>
              <div className="trainer-image-wrapper">
                <img
                  src={trainer.image}
                  alt={`${trainer.name} fitness trainer`}
                  loading="lazy"
                />

                <span className="trainer-experience">
                  {trainer.experience}
                </span>

                <button
                  className="trainer-view-btn"
                  onClick={() => setSelectedTrainer(trainer)}
                >
                  VIEW PROFILE
                  <ArrowRight size={17} />
                </button>
              </div>

              <div className="trainer-card-content">
                <span className="trainer-role">{trainer.role}</span>

                <h3>{trainer.name}</h3>

                <div className="trainer-specialty">
                  <Dumbbell size={16} />
                  {trainer.specialty}
                </div>

                <div className="trainer-card-bottom">
                  <span>
                    <Award size={16} />
                    PROFESSIONAL COACH
                  </span>

                  <button
                    className="trainer-arrow"
                    aria-label={`View ${trainer.name} profile`}
                    onClick={() => setSelectedTrainer(trainer)}
                  >
                    <ArrowRight size={19} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="trainers-cta">
        <span className="trainers-eyebrow">YOUR GOALS DESERVE GREAT COACHING</span>

        <h2>
          READY TO TRAIN
          <br />
          <span>WITH PURPOSE?</span>
        </h2>

        <p>
          Start your fitness journey with the right guidance,
          the right mindset, and a commitment to progress.
        </p>

        <Link to="/programs" className="trainers-primary-btn">
          EXPLORE OUR PROGRAMS
          <ArrowRight size={19} />
        </Link>
      </section>

      {/* TRAINER PROFILE MODAL */}
      {selectedTrainer && (
        <div
          className="trainer-modal-overlay"
          onClick={() => setSelectedTrainer(null)}
        >
          <div
            className="trainer-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="trainer-modal-close"
              onClick={() => setSelectedTrainer(null)}
              aria-label="Close profile"
            >
              <X size={22} />
            </button>

            <img
              src={selectedTrainer.image}
              alt={selectedTrainer.name}
            />

            <div className="trainer-modal-content">
              <span className="trainer-role">
                {selectedTrainer.role}
              </span>

              <h2>{selectedTrainer.name}</h2>

              <p>{selectedTrainer.description}</p>

              <h4>AREAS OF EXPERTISE</h4>

              {selectedTrainer.certifications.map((item) => (
                <div className="trainer-certification" key={item}>
                  <CheckCircle2 size={17} />
                  {item}
                </div>
              ))}

              <p className="trainer-modal-experience">
                Experience: {selectedTrainer.experience}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Trainers;
