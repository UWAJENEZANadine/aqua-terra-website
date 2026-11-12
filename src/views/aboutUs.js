import React from "react";
import HomeLayout from "../components/homeLayout";
import lakeImage from "../assets/images/lake1.jpeg";
import heroImage from "../assets/images/lake5.jpeg";
import "../css/aboutUs.css";

const AboutUs = () => {
  return (
    <HomeLayout>
      <div className="about-page">
        {/* OUR PERSPECTIVE */}
        <section className="about-perspective" id="who-we-are">
          <div className="perspective-content">
            <span className="about-eyebrow">OUR PERSPECTIVE</span>

            <h2>
              Healthy Water Ecosystems,
              <span> A Thriving Planet.</span>
            </h2>

            <p>
              Aquatic ecosystems are essential to life on Earth. They provide
              habitats for diverse species, support natural processes, and
              contribute to the balance of our environment.
            </p>

            <p>
              From oceans and coastal environments to lakes and rivers, these
              ecosystems face growing environmental pressures. Protecting them
              requires awareness, responsible practices, and collective
              commitment.
            </p>
          </div>

          <div className="perspective-visual">
            <img src={lakeImage} alt="Natural aquatic environment" />
            <div className="perspective-image-caption">
              <span>OUR FOCUS</span>
              <h3>Protecting life through aquatic conservation.</h3>
            </div>
          </div>
        </section>

        {/* MISSION AND VISION */}
        <section className="mission-vision-section" id="mission-vision">
          <div className="about-section-heading">
            <span className="about-eyebrow">OUR DIRECTION</span>
            <h2>What Drives Us</h2>
            <p>
              Our purpose and aspirations guide our commitment to protecting
              nature and promoting environmental responsibility.
            </p>
          </div>

          <div className="mission-vision-grid">
            <article className="mission-card">
              <div className="mission-card-content">
                <span className="mission-label">WHY WE EXIST</span>
                <h3>Our Mission</h3>
                <p>
                  To promote the conservation of marine life and aquatic
                  ecosystems through environmental awareness, education,
                  collaboration, and responsible conservation practices.
                </p>
              </div>
            </article>

            <article className="vision-card">
              <div className="mission-card-content">
                <span className="mission-label">THE FUTURE WE ENVISION</span>
                <h3>Our Vision</h3>
                <p>
                  A future where marine life and aquatic ecosystems are
                  protected, biodiversity thrives, and communities actively
                  contribute to environmental sustainability.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* OBJECTIVES */}
        <section className="objectives-section" id="objectives">
          <div className="about-section-heading objectives-heading">
            <span className="about-eyebrow">OUR OBJECTIVES</span>
            <h2>What We Aim to Achieve</h2>
            <p>
              Our objectives guide our efforts toward protecting aquatic
              ecosystems and promoting environmental sustainability.
            </p>
          </div>

          <div className="objectives-list">
            <article className="objective-card">
              <div className="objective-title">
                <span>01 / ECOSYSTEMS</span>
                <h3>Protect Aquatic Ecosystems</h3>
              </div>
              <p>
                Promote the conservation of marine and freshwater environments
                and the natural resources they support.
              </p>
            </article>

            <article className="objective-card">
              <div className="objective-title">
                <span>02 / BIODIVERSITY</span>
                <h3>Conserve Biodiversity</h3>
              </div>
              <p>
                Support the protection of aquatic species, wildlife, and their
                natural habitats.
              </p>
            </article>

            <article className="objective-card">
              <div className="objective-title">
                <span>03 / AWARENESS</span>
                <h3>Promote Environmental Awareness</h3>
              </div>
              <p>
                Encourage environmental education and responsible practices
                among communities.
              </p>
            </article>

            <article className="objective-card">
              <div className="objective-title">
                <span>04 / COMMUNITY</span>
                <h3>Encourage Community Participation</h3>
              </div>
              <p>
                Promote community involvement and collaboration in environmental
                conservation activities.
              </p>
            </article>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="values-section">
          <div className="about-section-heading">
            <span className="about-eyebrow">WHAT GUIDES US</span>
            <h2>Our Core Values</h2>
            <p>
              The principles that shape how we approach conservation and
              environmental protection.
            </p>
          </div>

          <div className="values-grid">
            <article className="value-card value-nature">
              <span className="value-word">NATURE</span>
              <h3>Respect for Nature</h3>
              <p>
                Recognizing the value of every living species and the ecosystems
                that support them.
              </p>
            </article>

            <article className="value-card value-sustainability">
              <span className="value-word">FUTURE</span>
              <h3>Sustainability</h3>
              <p>
                Encouraging responsible practices that protect natural resources
                for future generations.
              </p>
            </article>

            <article className="value-card value-collaboration">
              <span className="value-word">TOGETHER</span>
              <h3>Collaboration</h3>
              <p>
                Working with communities, institutions, and partners toward
                shared conservation goals.
              </p>
            </article>

            <article className="value-card value-education">
              <span className="value-word">KNOWLEDGE</span>
              <h3>Education</h3>
              <p>
                Promoting knowledge and awareness to inspire positive
                environmental action.
              </p>
            </article>
          </div>
        </section>

        {/* COMMITMENT */}
        <section className="about-commitment">
          <div className="commitment-content">
            <span className="about-eyebrow">OUR COMMITMENT</span>
            <h2>Conserving Today, Thriving Tomorrow.</h2>
            <p>
              Protecting marine life and aquatic ecosystems requires collective
              responsibility. We believe that informed communities and
              meaningful collaboration can contribute to a more sustainable
              future.
            </p>
            <a href="/our-work" className="about-commitment-button">
              Explore Our Work
            </a>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export default AboutUs;
