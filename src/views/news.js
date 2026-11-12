
import React from "react";
import HomeLayout from "../components/homeLayout";
import "../css/news.css";

const News = () => {
  return (
    <HomeLayout>
      <div className="news-page">

        {/* NEWS HERO */}
        <section className="news-hero">
          <div className="news-hero-content">
            <span className="news-eyebrow">STAY INFORMED</span>
            <h1>News, Knowledge and Environmental Awareness</h1>
            <p>
              Discover updates, learn about environmental conservation,
              and explore information that inspires action to protect
              our aquatic ecosystems.
            </p>
            <a href="#latest-news" className="news-hero-button">
              Explore Updates
            </a>
          </div>
        </section>

        {/* LATEST NEWS */}
        <section className="latest-news-section" id="latest-news">
          <div className="news-section-heading">
            <span className="news-eyebrow">WHAT'S HAPPENING</span>
            <h2>Latest News</h2>
            <p>
              Updates and announcements from Aqua Terra Conservation Initiative.
            </p>
          </div>

          <div className="news-empty-state">
            <div className="news-empty-icon">📰</div>
            <h3>Updates Coming Soon</h3>
            <p>
              There are no news updates to share at the moment.
              Please check back as we share organizational news,
              announcements and conservation activities.
            </p>
          </div>
        </section>

        {/* ENVIRONMENTAL INSIGHTS */}
        <section className="environmental-insights">
          <div className="insights-heading">
            <div>
              <span className="news-eyebrow">LEARN AND DISCOVER</span>
              <h2>Environmental Insights</h2>
              <p>
                Explore important topics that help explain why protecting
                our environment matters.
              </p>
            </div>
          </div>

          <div className="insights-grid">
            <article className="insight-card">
              <div className="insight-number">01</div>
              <span>MARINE CONSERVATION</span>
              <h3>Why Marine Life Matters</h3>
              <p>
                Oceans support diverse marine species and contribute
                to the health and balance of our planet. Protecting
                marine life helps preserve these essential ecosystems.
              </p>
            </article>

            <article className="insight-card">
              <div className="insight-number">02</div>
              <span>FRESHWATER ECOSYSTEMS</span>
              <h3>Protecting Rivers and Lakes</h3>
              <p>
                Rivers and lakes provide habitats for many species
                and support human communities. Responsible management
                helps maintain their ecological health.
              </p>
            </article>

            <article className="insight-card">
              <div className="insight-number">03</div>
              <span>ENVIRONMENTAL AWARENESS</span>
              <h3>Understanding Environmental Pollution</h3>
              <p>
                Pollution can damage aquatic habitats and threaten
                biodiversity. Awareness and responsible practices
                can help reduce its impact.
              </p>
            </article>
          </div>
        </section>

        {/* PUBLICATIONS */}
        <section className="publications-section" id="publications">
          <div className="publications-content">
            <div className="publications-text">
              <span className="news-eyebrow">RESOURCES AND MATERIALS</span>
              <h2>Publications</h2>
              <p>
                This section will provide access to environmental
                reports, educational guides, awareness materials
                and other publications produced or shared by
                Aqua Terra Conservation Initiative.
              </p>
            </div>

            <div className="publications-empty">
              <div className="publication-icon">📚</div>
              <h3>Publications Coming Soon</h3>
              <p>
                Our collection of publications will be made available
                here as resources are developed and released.
              </p>
            </div>
          </div>
        </section>

        {/* NEWS CTA */}
        <section className="news-cta">
          <span className="news-eyebrow">BE PART OF THE CHANGE</span>
          <h2>Environmental Protection Starts With Awareness</h2>
          <p>
            Learn, share knowledge and take part in efforts to
            protect aquatic ecosystems.
          </p>
          <a href="/get-involved">Get Involved</a>
        </section>

      </div>
    </HomeLayout>
  );
};

export default News;
