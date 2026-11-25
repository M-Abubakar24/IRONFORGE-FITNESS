
import { Check, X, ArrowRight, Crown, Dumbbell, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "BASIC",
    subtitle: "START YOUR JOURNEY",
    price: "3,000",
    icon: Dumbbell,
    description: "Everything you need to start building a stronger you.",
    features: [
      "Full gym floor access",
      "Standard gym equipment",
      "Locker access",
      "General fitness guidance",
    ],
    unavailable: [
      "Group fitness classes",
      "Personal training",
      "Personalized workout plan",
    ],
    popular: false,
  },
  {
    name: "PRO",
    subtitle: "LEVEL UP YOUR TRAINING",
    price: "5,000",
    icon: Zap,
    description: "More guidance, more opportunities, more progress.",
    features: [
      "Full gym floor access",
      "Standard gym equipment",
      "Locker access",
      "Group fitness classes",
      "Workout planning",
      "Progress tracking",
    ],
    unavailable: [
      "Personal training sessions",
    ],
    popular: true,
  },
  {
    name: "ELITE",
    subtitle: "THE COMPLETE EXPERIENCE",
    price: "8,000",
    icon: Crown,
    description: "A premium experience with individual fitness guidance.",
    features: [
      "Full gym floor access",
      "Standard gym equipment",
      "Locker access",
      "Group fitness classes",
      "Workout planning",
      "Progress tracking",
      "Personal training sessions",
      "Personalized workout plan",
      "Priority support",
    ],
    unavailable: [],
    popular: false,
  },
];

const Membership = () => {
  return (
    <main className="membership-page">

      <section className="membership-hero">
        <span className="membership-eyebrow">
          INVEST IN YOUR STRONGER SELF
        </span>

        <h1>
          CHOOSE YOUR
          <br />
          <span>MEMBERSHIP.</span>
        </h1>

        <p>
          Find the membership that matches your goals.
          Start where you are and build toward where you want to be.
        </p>

        <a href="#membership-plans" className="membership-button">
          EXPLORE PLANS
          <ArrowRight size={19} />
        </a>
      </section>

      <section className="membership-section" id="membership-plans">

        <div className="membership-heading">
          <span className="membership-eyebrow">
            SIMPLE. FLEXIBLE. EFFECTIVE.
          </span>

          <h2>
            FIND YOUR <span>FIT.</span>
          </h2>

          <p>
            Three membership options designed to support
            different training goals and fitness journeys.
          </p>
        </div>

        <div className="membership-grid">

          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <article
                className={`membership-card ${plan.popular ? "membership-popular" : ""}`}
                key={plan.name}
              >
                {plan.popular && (
                  <span className="membership-popular-label">
                    MOST POPULAR
                  </span>
                )}

                <div className="membership-icon">
                  <Icon size={28} />
                </div>

                <span className="membership-subtitle">
                  {plan.subtitle}
                </span>

                <h3>{plan.name}</h3>

                <p className="membership-description">
                  {plan.description}
                </p>

                <div className="membership-price">
                  <span>PKR</span>
                  <strong>{plan.price}</strong>
                  <small>/ MONTH</small>
                </div>

                <Link
                  to="/register"
                  className="membership-join-button"
                >
                  CHOOSE {plan.name}
                  <ArrowRight size={17} />
                </Link>

                <div className="membership-features">
                  <h4>WHAT'S INCLUDED</h4>

                  {plan.features.map((feature) => (
                    <div className="membership-feature" key={feature}>
                      <Check size={17} />
                      <span>{feature}</span>
                    </div>
                  ))}

                  {plan.unavailable.map((feature) => (
                    <div
                      className="membership-feature membership-disabled"
                      key={feature}
                    >
                      <X size={17} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}

        </div>
      </section>

      <section className="membership-cta">
        <span className="membership-eyebrow">
          YOUR FUTURE STARTS TODAY
        </span>

        <h2>
          MAKE YOUR
          <br />
          <span>MOVE.</span>
        </h2>

        <p>
          The hardest part is starting. Take the first step
          toward a stronger, healthier lifestyle.
        </p>

        <Link to="/contact" className="membership-button">
          CONTACT US
          <ArrowRight size={19} />
        </Link>
      </section>

    </main>
  );
};

export default Membership;
