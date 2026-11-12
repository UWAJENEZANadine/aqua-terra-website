import React from "react";
import HomeLayout from "../components/homeLayout";

import heroImage from "../assets/images/lake9.jpeg";
import aboutImage from "../assets/images/swamp1.jpeg";
import marineImage from "../assets/images/lake5.jpeg";
import natureImage from "../assets/images/nature1.jpeg";


import "./home.css";

const conservationAreas = [
  {
    number: "01",
    title: "Marine Species Protection",
    description:
      "Promoting the protection of marine animals, plants, and the biodiversity that sustains ocean life.",
    image: marineImage,
    link: "/our-work#biodiversity-protection",
  },
  {
    number: "02",
    title: "Aquatic Habitat Conservation",
    description:
      "Supporting the conservation of coral reefs, mangroves, rivers, lakes, and other important habitats.",
    image: aboutImage,
    link: "/our-work#environmental-conservation",
  },
  {
    number: "03",
    title: "Pollution Prevention",
    description:
      "Encouraging responsible practices that reduce waste and pollution entering aquatic environments.",
    image: natureImage,
    link: "/our-work#environmental-conservation",
  },
  {
    number: "04",
    title: "Education and Awareness",
    description:
      "Building environmental awareness and encouraging communities to take part in conservation.",
    image: heroImage,
    link: "/our-work#ecosystem-restoration",
  },
];
const Home = () => {
  return (
    <HomeLayout>
      <div className="home-page">
        {/* HERO */}
        <section
          className="home-hero"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="home-hero-overlay">
            <div className="home-hero-content">
              <span className="home-eyebrow">
                AQUA TERRA CONSERVATION INITIATIVE
              </span>

              <h1>
                Protecting Nature.
                <br />
                Preserving Life.
              </h1>

              <p>
                Healthy aquatic ecosystems are essential to life on Earth. We
                promote conservation, protect biodiversity, and encourage
                responsible action for a healthier planet.
              </p>

              <div className="home-hero-actions">
                <a href="/our-work" className="home-button home-button-primary">
                  Discover Our Work
                </a>

                <a
                  href="/get-involved"
                  className="home-button home-button-outline"
                >
                  Get Involved
                </a>
              </div>
            </div>

            <div className="hero-bottom-note">
              <span>OUR COMMITMENT</span>
              <strong>Conserving Today, Thriving Tomorrow.</strong>
            </div>
          </div>
        </section>
        

        {/* INTRODUCTION */}
        <section className="home-introduction">
          <div className="intro-image-wrap">
            <img src={aboutImage} alt="Natural aquatic ecosystem" />
            <div className="intro-image-label">
              <span>OUR PLANET</span>
              <strong>Nature connects us all.</strong>
            </div>
          </div>

          <div className="intro-content">
            <span className="home-eyebrow">WHO WE ARE</span>
            <h2>Protecting the ecosystems that sustain life</h2>

            <p>
              Aqua Terra Conservation Initiative is dedicated to environmental
              conservation, with a strong focus on marine life and aquatic
              ecosystems.
            </p>

            <p>
              Through awareness, education, collaboration, and responsible
              environmental practices, we aim to contribute to a future where
              nature and biodiversity can thrive.
            </p>

            <a href="/about-us" className="home-text-link">
              Discover who we are <span>→</span>
            </a>
          </div>
        </section>

        {/* CONSERVATION FOCUS */}
        <section className="home-focus-section">
          <div className="home-section-heading">
            <div>
              <span className="home-eyebrow">OUR AREAS OF FOCUS</span>
              <h2>Where conservation begins</h2>
            </div>

            <p>
              We promote environmental responsibility through conservation
              awareness, biodiversity protection, and the preservation of
              aquatic habitats.
            </p>
          </div>

          <div className="home-focus-grid">
            {conservationAreas.map((area) => (
              <article className="home-focus-card" key={area.number}>
                <a href={area.link} className="focus-image-link">
                  <img src={area.image} alt={area.title} />
                  <span className="focus-number">{area.number}</span>
                </a>

                <div className="focus-card-content">
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <a href={area.link} className="focus-card-link">
                    Explore area <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="home-impact-section">
          <div className="impact-image">
            <img
              src={natureImage}
              alt="Natural environment and aquatic habitat"
            />
          </div>

          <div className="impact-content">
            <span className="home-eyebrow">WHY IT MATTERS</span>
            <h2>Healthy ecosystems mean a healthier planet</h2>

            <p>
              Oceans, rivers, lakes, and wetlands support biodiversity, provide
              habitats for wildlife, and contribute to the natural systems on
              which communities depend.
            </p>

            <div className="impact-points">
              <div>
                <span>01</span>
                <p>
                  <strong>Protect biodiversity</strong> by supporting the
                  conservation of species and their habitats.
                </p>
              </div>

              <div>
                <span>02</span>
                <p>
                  <strong>Preserve natural systems</strong> that help sustain
                  life and environmental balance.
                </p>
              </div>

              <div>
                <span>03</span>
                <p>
                  <strong>Encourage responsibility</strong> through awareness
                  and community participation.
                </p>
              </div>
            </div>

            <a href="/our-work" className="home-text-link">
              Learn about our work <span>→</span>
            </a>
          </div>
        </section>
        
        {/* OUR APPROACH */}
        <section className="home-approach-section">
          <div className="approach-heading">
            <span className="home-eyebrow">HOW WE WORK</span>
            <h2>Building a culture of conservation</h2>
            <p>
              Lasting environmental protection requires knowledge, cooperation,
              and responsible action.
            </p>
          </div>

          <div className="home-approach-list">
            <div>
              <span>01</span>
              <h3>Learning</h3>
              <p>
                Promoting knowledge and understanding of environmental issues.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Engagement</h3>
              <p>
                Encouraging people and communities to participate in
                conservation.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Collaboration</h3>
              <p>Connecting with others who share a commitment to nature.</p>
            </div>

            <div>
              <span>04</span>
              <h3>Action</h3>
              <p>
                Promoting responsible practices that support healthier
                ecosystems.
              </p>
            </div>
          </div>
        </section>

        {/* CLOSING BANNER */}
        <section
          className="home-closing-section"
          style={{ backgroundImage: `url(${natureImage})` }}
        >
          <div className="closing-overlay">
            <span className="home-eyebrow">BE PART OF THE CHANGE</span>
            <h2>Nature needs our attention. Its future needs our action.</h2>
            <p>
              Join us in promoting awareness and protecting the ecosystems that
              sustain life.
            </p>
            <a href="/get-involved" className="home-button home-button-primary">
              Be Part of the Change
            </a>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export default Home;
