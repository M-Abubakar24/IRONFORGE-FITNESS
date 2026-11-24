
import {
  Target,
  Eye,
  Dumbbell,
  Users,
  Award,
  HeartPulse,
} from "lucide-react";

const About = () => {
  return (
    <main className="about-page">

      <section className="page-hero about-hero">
        <span className="eyebrow">WHO WE ARE</span>
        <h1>MORE THAN A GYM.<br /><span>A MOVEMENT.</span></h1>
        <p>
          Building strength, discipline and confidence through
          consistent training and a supportive fitness environment.
        </p>
      </section>

      <section className="about-intro section-padding">
        <div className="about-image" />

        <div className="about-content">
          <span className="eyebrow">OUR STORY</span>
          <h2>WELCOME TO <span>IRONFORGE.</span></h2>

          <p>
            IRONFORGE FITNESS CLUB was built around one simple belief:
            strength is created through discipline, consistency and hard work.
          </p>

          <p>
            We aim to provide a modern training environment where beginners
            and experienced athletes can work towards their fitness goals.
            From strength training to cardiovascular fitness, every workout
            is an opportunity to become better.
          </p>

          <div className="about-highlight">
            FORGED BY DISCIPLINE. BUILT FOR STRENGTH.
          </div>
        </div>
      </section>

      <section className="mission-section section-padding">
        <div className="mission-card">
          <Target size={38} />
          <h3>OUR MISSION</h3>
          <p>
            To create an environment that motivates people to develop
            healthier lifestyles through quality training, consistency
            and professional guidance.
          </p>
        </div>

        <div className="mission-card">
          <Eye size={38} />
          <h3>OUR VISION</h3>
          <p>
            To become a trusted fitness destination known for empowering
            individuals to achieve their physical and personal potential.
          </p>
        </div>
      </section>

      <section className="values-section section-padding">
        <div className="section-heading">
          <div>
            <span className="eyebrow">WHAT DEFINES US</span>
            <h2>OUR CORE <span>VALUES</span></h2>
          </div>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <Dumbbell />
            <h3>DISCIPLINE</h3>
            <p>Progress comes from showing up and putting in the work.</p>
          </div>

          <div className="value-card">
            <HeartPulse />
            <h3>HEALTH</h3>
            <p>We believe fitness should support a healthier lifestyle.</p>
          </div>

          <div className="value-card">
            <Users />
            <h3>COMMUNITY</h3>
            <p>We encourage a welcoming and supportive training culture.</p>
          </div>

          <div className="value-card">
            <Award />
            <h3>EXCELLENCE</h3>
            <p>We continuously strive to improve our training experience.</p>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
