import React from "react";
import HomeLayout from "../components/homeLayout";
import "../css/getInvolved.css";

const contactEmail = "jeandamascenemuragijimana380@gmail.com";

const GetInvolved = () => {
  return (
    <HomeLayout>
      <div className="get-involved-page">
        {/* INTRODUCTION */}
        <section className="involved-intro">
          <span className="involved-eyebrow">GET INVOLVED</span>

          <h2>Every Contribution Matters</h2>

          <p>
            Whether you give your time, share your expertise, build
            partnerships, or provide financial support, your contribution can
            help advance environmental awareness and conservation.
          </p>
        </section>

        {/* VOLUNTEER */}
        <section className="involved-option volunteer-section" id="volunteer">
          <div className="involved-option-content">
            <span className="involved-eyebrow">GIVE YOUR TIME</span>

            <h2>Become a Volunteer</h2>

            <p>
              Are you interested in environmental conservation? Volunteering is
              an opportunity to contribute your time, knowledge, and skills
              toward protecting aquatic ecosystems.
            </p>

            <p>
              We welcome people who are interested in environmental awareness,
              education, community engagement, and conservation-related
              activities.
            </p>

            <a
              href={`mailto:${contactEmail}?subject=${encodeURIComponent("Volunteering Inquiry - Aqua Terra Conservation Initiative")}`}
              className="involved-link"
            >
              Contact Us About Volunteering →
            </a>
          </div>

          <div className="involved-option-visual volunteer-visual">
            <span>VOLUNTEER</span>
            <p>Give your time. Share your knowledge. Make a difference.</p>
          </div>
        </section>

        {/* PARTNERSHIP */}
        <section className="involved-option partner-section" id="partner">
          <div className="involved-option-visual partner-visual">
            <span>PARTNERSHIP</span>
            <p>Shared commitment can create meaningful change.</p>
          </div>

          <div className="involved-option-content">
            <span className="involved-eyebrow">WORK TOGETHER</span>

            <h2>Become a Partner</h2>

            <p>
              Collaboration can strengthen environmental conservation efforts.
              We welcome interest from organizations, institutions, businesses,
              and individuals who share a commitment to protecting aquatic
              ecosystems.
            </p>

            <p>
              Partnerships can create opportunities to exchange knowledge,
              support environmental awareness, and contribute to conservation
              goals.
            </p>

            <a
              href={`mailto:${contactEmail}?subject=${encodeURIComponent("Partnership Inquiry - Aqua Terra Conservation Initiative")}`}
              className="involved-link"
            >
              Discuss a Partnership →
            </a>
          </div>
        </section>

        {/* DONATIONS */}
        <section className="donate-section" id="donate">
          <div className="donate-content">
            <span className="involved-eyebrow">SUPPORT CONSERVATION</span>

            <h2>Support Our Conservation Mission</h2>

            <p>
              Financial contributions can help support environmental awareness,
              education, and conservation-related efforts. If you would like to
              explore ways to contribute, please contact us for further
              information.
            </p>

            <a
              href={`mailto:${contactEmail}?subject=${encodeURIComponent("Conservation Support Inquiry - Aqua Terra Conservation Initiative")}`}
              className="donate-button"
            >
              Contact Us to Support →
            </a>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="involved-closing">
          <span className="involved-eyebrow">TOGETHER FOR NATURE</span>

          <h2>Conserving Today, Thriving Tomorrow.</h2>

          <p>
            Get in touch to learn more about opportunities to contribute to
            aquatic ecosystem conservation.
          </p>

          <a
            href={`mailto:${contactEmail}?subject=${encodeURIComponent("General Inquiry - Aqua Terra Conservation Initiative")}`}
          >
            Get in Touch →
          </a>
        </section>
      </div>
    </HomeLayout>
  );
};

export default GetInvolved;
