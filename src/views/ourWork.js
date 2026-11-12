
import React from "react";
import HomeLayout from "../components/homeLayout";
import "../css/ourWork.css";

const OurWork = () => {
  return (
    <HomeLayout>
      <div className="our-work-page">

        {/* Hero Section */}
        <section className="work-hero">
          <div className="work-hero-content">
            <span>WHAT WE DO</span>
            <h1>Protecting Nature. Restoring Ecosystems.</h1>
            <p>
              We work to protect aquatic environments, conserve biodiversity,
              and restore ecosystems for a healthier and more sustainable future.
            </p>
            <a href="#our-focus-areas" className="work-hero-btn">
              Explore Our Work
            </a>
          </div>
        </section>

        {/* Introduction */}
        <section className="work-intro">
          <div className="work-intro-text">
            <span className="work-label">OUR APPROACH</span>
            <h2>Creating a Lasting Impact on the Environment</h2>
            <p>
              At Aqua Terra Conservation Initiative, we believe that protecting
              the environment requires collective action. Our work focuses on
              conserving natural resources, protecting biodiversity, and
              supporting the restoration of ecosystems.
            </p>
            <p>
              Through awareness, community participation, and conservation
              initiatives, we aim to encourage responsible environmental
              practices and contribute to a sustainable future.
            </p>
          </div>
          <div className="work-intro-highlight">
            <h3>Our Commitment</h3>
            <p>
              Conserving aquatic and terrestrial ecosystems while encouraging
              communities to become active participants in environmental
              protection.
            </p>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="work-focus" id="our-focus-areas">
          <div className="work-section-heading">
            <span className="work-label">OUR FOCUS AREAS</span>
            <h2>Where We Make a Difference</h2>
            <p>
              Our work is organized around three important areas of
              environmental protection.
            </p>
          </div>

          <div className="work-focus-grid">

            <article className="work-focus-card" id="environmental-conservation">
              <div className="work-card-number">01</div>
              <h3>Environmental Conservation</h3>
              <p>
                Promoting the responsible use and protection of natural
                resources, with particular attention to oceans, rivers,
                lakes, and other aquatic environments.
              </p>
              <a href="/our-work#environmental-conservation">
                Explore this area
              </a>
            </article>

            <article className="work-focus-card" id="biodiversity-protection">
              <div className="work-card-number">02</div>
              <h3>Biodiversity Protection</h3>
              <p>
                Supporting the protection of aquatic species, wildlife,
                and natural habitats while raising awareness about the
                importance of biodiversity.
              </p>
              <a href="/our-work#biodiversity-protection">
                Explore this area
              </a>
            </article>

            <article className="work-focus-card" id="ecosystem-restoration">
              <div className="work-card-number">03</div>
              <h3>Ecosystem Restoration</h3>
              <p>
                Encouraging efforts that help degraded ecosystems recover,
                including the protection and restoration of wetlands,
                forests, rivers, and aquatic habitats.
              </p>
              <a href="/our-work#ecosystem-restoration">
                Explore this area
              </a>
            </article>

          </div>
        </section>

        {/* Marine Conservation Feature */}
        <section className="marine-feature">
          <div className="marine-feature-content">
            <span className="work-label">A KEY PRIORITY</span>
            <h2>Healthy Oceans, Thriving Marine Life</h2>
            <p>
              Oceans support diverse forms of life and play an important
              role in maintaining the balance of our planet. Protecting
              marine habitats and addressing threats such as pollution
              and habitat destruction are essential to their future.
            </p>
            <a href="/get-involved" className="marine-feature-btn">
              Get Involved
            </a>
          </div>
        </section>

        {/* Call to Action */}
        <section className="work-cta">
          <h2>Be Part of Environmental Change</h2>
          <p>
            A healthier environment begins with collective responsibility
            and meaningful action.
          </p>
          <a href="/get-involved">Join Our Efforts</a>
        </section>

      </div>
    </HomeLayout>
  );
};

export default OurWork;
