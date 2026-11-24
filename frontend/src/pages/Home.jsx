
import {
  ArrowRight,
  Dumbbell,
  Flame,
  HeartPulse,
  Timer,
  Trophy,
  CheckCircle2,
} from "lucide-react";

const programs = [
  {
    icon: <Dumbbell />,
    title: "Strength Training",
    description: "Build muscle, improve strength and develop a powerful physique.",
    number: "01",
  },
  {
    icon: <Flame />,
    title: "Fat Loss",
    description: "Structured training to improve fitness and support your fat-loss goals.",
    number: "02",
  },
  {
    icon: <HeartPulse />,
    title: "Cardio Fitness",
    description: "Improve endurance, stamina and overall cardiovascular fitness.",
    number: "03",
  },
  {
    icon: <Trophy />,
    title: "Personal Training",
    description: "Work with experienced trainers through a personalized fitness plan.",
    number: "04",
  },
];

const plans = [
  {
    name: "BASIC",
    price: "3,000",
    period: "month",
    features: ["Gym access", "Locker facilities", "Basic fitness assessment"],
  },
  {
    name: "PRO",
    price: "5,000",
    period: "month",
    popular: true,
    features: ["Everything in Basic", "Group fitness classes", "Personalized workout plan"],
  },
  {
    name: "ELITE",
    price: "8,000",
    period: "month",
    features: ["Everything in Pro", "Personal training sessions", "Diet guidance"],
  },
];

const Home = () => {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="eyebrow">WELCOME TO IRONFORGE FITNESS CLUB</span>

          <h1>
            FORGED BY
            <span> DISCIPLINE.</span>
            <br />
            BUILT BY
            <span> STRENGTH.</span>
          </h1>

          <p>
            Your journey to a stronger, healthier and more confident
            version of yourself starts here.
          </p>

          <div className="hero-actions">
            <a href="/membership" className="btn btn-primary">
              EXPLORE MEMBERSHIPS <ArrowRight size={18} />
            </a>
            <a href="/programs" className="btn btn-outline">
              EXPLORE PROGRAMS
            </a>
          </div>

          <div className="hero-stats">
            <div><strong>10+</strong><span>TRAINING PROGRAMS</span></div>
            <div><strong>15+</strong><span>FITNESS EQUIPMENT TYPES</span></div>
            <div><strong>100%</strong><span>COMMITMENT TO YOU</span></div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro section-padding">
        <div>
          <span className="eyebrow">MORE THAN JUST A GYM</span>
          <h2>YOUR STRENGTH.<br /><span>YOUR JOURNEY.</span></h2>
        </div>
        <div className="intro-copy">
          <p>
            At IRONFORGE, we believe fitness is built through consistency,
            discipline and determination. Whether you are starting your
            fitness journey or taking your training to the next level,
            we provide an environment where progress becomes a lifestyle.
          </p>
          <a href="/about" className="text-link">
            DISCOVER OUR STORY <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="programs section-padding">
        <div className="section-heading">
          <div>
            <span className="eyebrow">TRAIN WITH PURPOSE</span>
            <h2>OUR <span>PROGRAMS</span></h2>
          </div>
          <a href="/programs" className="text-link">
            ALL PROGRAMS <ArrowRight size={17} />
          </a>
        </div>

        <div className="program-grid">
          {programs.map((program) => (
            <article className="program-card" key={program.number}>
              <div className="program-top">
                <span className="program-number">{program.number}</span>
                <span className="program-icon">{program.icon}</span>
              </div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <a href="/programs" aria-label={`Explore ${program.title}`}>
                <ArrowRight />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why section-padding">
        <div className="why-image" />
        <div className="why-content">
          <span className="eyebrow">THE IRONFORGE DIFFERENCE</span>
          <h2>BUILT FOR<br /><span>YOUR BEST.</span></h2>
          <p>
            Great results require the right environment, the right guidance
            and the right mindset. We bring them together under one roof.
          </p>
          {[
            "Modern strength and cardio equipment",
            "Professional fitness guidance",
            "Structured workout programs",
            "Supportive training environment",
          ].map((item) => (
            <div className="benefit" key={item}>
              <CheckCircle2 size={19} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="membership section-padding">
        <div className="section-heading">
          <div>
            <span className="eyebrow">INVEST IN YOURSELF</span>
            <h2>MEMBERSHIP <span>PLANS</span></h2>
          </div>
          <a href="/membership" className="text-link">
            VIEW ALL PLANS <ArrowRight size={17} />
          </a>
        </div>

        <div className="membership-grid">
          {plans.map((plan) => (
            <article
              className={`plan-card ${plan.popular ? "popular-plan" : ""}`}
              key={plan.name}
            >
              {plan.popular && <span className="popular-label">MOST POPULAR</span>}
              <h3>{plan.name}</h3>
              <p className="plan-description">MONTHLY MEMBERSHIP</p>
              <div className="plan-price">
                <span>PKR</span> {plan.price}
                <small> / {plan.period}</small>
              </div>
              <div className="plan-features">
                {plan.features.map((feature) => (
                  <div key={feature}>
                    <CheckCircle2 size={17} />
                    {feature}
                  </div>
                ))}
              </div>
              <a href="/register" className="btn btn-primary plan-button">
                GET STARTED <ArrowRight size={17} />
              </a>
            </article>
          ))}
        </div>
        <p className="pricing-note">
          * Demonstration prices for the website. We can update these with your actual gym rates.
        </p>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <span className="eyebrow">YOUR NEXT CHAPTER STARTS NOW</span>
        <h2>STOP WAITING.<br /><span>START FORGING.</span></h2>
        <p>Show up. Put in the work. Become stronger every day.</p>
        <a href="/register" className="btn btn-primary">
          BECOME A MEMBER <ArrowRight size={18} />
        </a>
      </section>
    </main>
  );
};

export default Home;
