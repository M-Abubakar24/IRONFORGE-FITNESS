
import {
  ArrowRight,
  Dumbbell,
  Flame,
  HeartPulse,
  UserRound,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    number: "01",
    title: "STRENGTH TRAINING",
    subtitle: "BUILD YOUR FOUNDATION",
    description:
      "Develop strength, improve technique, and build muscle through structured resistance training.",
    icon: Dumbbell,
    features: [
      "Progressive strength workouts",
      "Free weights and resistance training",
      "Beginner-to-advanced exercises",
      "Focus on proper lifting technique",
    ],
  },
  {
    number: "02",
    title: "FAT LOSS & CONDITIONING",
    subtitle: "MOVE WITH PURPOSE",
    description:
      "Combine resistance exercises and conditioning sessions to support your fitness and body-composition goals.",
    icon: Flame,
    features: [
      "Structured workout sessions",
      "Full-body conditioning",
      "Strength-focused fat-loss training",
      "Progress tracking",
    ],
  },
  {
    number: "03",
    title: "CARDIO & ENDURANCE",
    subtitle: "PUSH YOUR LIMITS",
    description:
      "Improve cardiovascular fitness, stamina, and overall endurance with varied training sessions.",
    icon: HeartPulse,
    features: [
      "Cardiovascular workouts",
      "Endurance development",
      "Interval training options",
      "Fitness-level-based progression",
    ],
  },
  {
    number: "04",
    title: "PERSONAL TRAINING",
    subtitle: "YOUR GOALS. YOUR PLAN.",
    description:
      "Get individual guidance with a training approach built around your experience, goals, and fitness level.",
    icon: UserRound,
    features: [
      "Individual training guidance",
      "Goal-oriented workout planning",
      "Exercise technique support",
      "Regular progress reviews",
    ],
  },
];

const Programs = () => {
  return (
    <main className="programs-page">
      <section className="programs-page-hero">
        <div className="programs-page-hero-content">
          <span className="programs-page-eyebrow">
            TRAIN WITH PURPOSE
          </span>

          <h1>
            FIND YOUR <span>STRENGTH.</span>
            <br />
            OWN YOUR JOURNEY.
          </h1>

          <p>
            Every goal needs a plan. Explore our training programs
            and find the approach that moves you forward.
          </p>

          <Link to="/about" className="programs-page-button">
            DISCOVER IRONFORGE
            <ArrowRight size={19} />
          </Link>
        </div>

        <div className="programs-page-hero-bottom">
          <span>DISCIPLINE</span>
          <span>CONSISTENCY</span>
          <span>PROGRESS</span>
        </div>
      </section>

      <section className="programs-page-section">
        <div className="programs-page-heading">
          <span className="programs-page-eyebrow">WHAT WE OFFER</span>
          <h2>
            TRAINING BUILT AROUND <span>YOU.</span>
          </h2>
          <p>
            Whether you're starting from scratch or taking your
            training to the next level, choose a program that
            supports your direction.
          </p>
        </div>

        <div className="programs-page-grid">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <article className="programs-page-card" key={program.number}>
                <div className="programs-page-card-top">
                  <span className="programs-page-number">
                    {program.number}
                  </span>

                  <div className="programs-page-icon">
                    <Icon size={29} strokeWidth={1.8} />
                  </div>
                </div>

                <span className="programs-page-subtitle">
                  {program.subtitle}
                </span>

                <h3>{program.title}</h3>

                <p className="programs-page-description">
                  {program.description}
                </p>

                <div className="programs-page-features">
                  {program.features.map((feature) => (
                    <div className="programs-page-feature" key={feature}>
                      <CheckCircle2 size={17} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="programs-page-cta">
        <span className="programs-page-eyebrow">
          YOUR NEXT CHAPTER STARTS HERE
        </span>

        <h2>
          STOP WAITING.
          <br />
          <span>START FORGING.</span>
        </h2>

        <p>
          Build better habits, challenge your limits, and make
          progress one session at a time.
        </p>

        <Link to="/about" className="programs-page-button">
          EXPLORE OUR STORY
          <ArrowRight size={19} />
        </Link>
      </section>
    </main>
  );
};

export default Programs;
