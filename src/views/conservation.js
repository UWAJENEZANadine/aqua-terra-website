
import React from "react";
import HomeLayout from "../components/homeLayout";
import "../css/conservation.css";

const Conservation = () => {
  return (
    <HomeLayout>
      <div className="conservation-page">

        {/* HERO SECTION */}
        <section className="conservation-hero">
          <div className="conservation-hero-content">
            <span className="conservation-eyebrow">
              PROTECTING OUR NATURAL WORLD
            </span>

            <h1>Conservation Today for a Better Tomorrow</h1>

            <p>
              Protecting aquatic ecosystems, preserving biodiversity,
              and promoting responsible environmental practices
              for future generations.
            </p>

            <a href="/get-involved" className="conservation-button">
              Be Part of the Change
            </a>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="conservation-intro">
          <div className="conservation-heading">
            <span className="conservation-eyebrow">
              WHY CONSERVATION MATTERS
            </span>

            <h2>Protecting Nature Protects Life</h2>

            <p>
              Healthy ecosystems provide essential resources, support
              biodiversity, regulate the environment, and sustain
              communities. Protecting these natural systems is important
              for maintaining ecological balance and ensuring a
              sustainable future.
            </p>
          </div>
        </section>

        {/* CONSERVATION PRIORITIES */}
        <section className="conservation-priorities">
          <div className="conservation-heading">
            <span className="conservation-eyebrow">
              WHAT WE FOCUS ON
            </span>

            <h2>Our Conservation Priorities</h2>

            <p>
              Our conservation priorities focus on protecting aquatic
              environments and encouraging responsible care for nature.
            </p>
          </div>

          <div className="priority-grid">

            <article className="priority-card">
              <div className="priority-icon">🐬</div>
              <h3>Marine Species Protection</h3>
              <p>
                Promoting the protection of marine animals and
                supporting the preservation of marine biodiversity.
              </p>
            </article>

            <article className="priority-card">
              <div className="priority-icon">🌊</div>
              <h3>Aquatic Habitat Conservation</h3>
              <p>
                Encouraging the protection of oceans, coral reefs,
                mangroves, rivers, lakes and wetlands.
              </p>
            </article>

            <article className="priority-card">
              <div className="priority-icon">♻️</div>
              <h3>Pollution Prevention</h3>
              <p>
                Raising awareness about plastic waste, water pollution
                and responsible waste management.
              </p>
            </article>

            <article className="priority-card">
              <div className="priority-icon">🌱</div>
              <h3>Biodiversity Conservation</h3>
              <p>
                Supporting the protection of different species
                and the ecosystems that sustain them.
              </p>
            </article>

            <article className="priority-card">
              <div className="priority-icon">📚</div>
              <h3>Environmental Education</h3>
              <p>
                Promoting environmental knowledge and awareness
                to encourage responsible decisions.
              </p>
            </article>

            <article className="priority-card">
              <div className="priority-icon">🤝</div>
              <h3>Community Engagement</h3>
              <p>
                Encouraging individuals, communities and organizations
                to participate in environmental conservation.
              </p>
            </article>

          </div>
        </section>

        {/* ENVIRONMENTAL CHALLENGES */}
        <section className="conservation-challenges">
          <div className="conservation-heading">
            <span className="conservation-eyebrow">
              UNDERSTANDING THE CHALLENGES
            </span>

            <h2>Environmental Challenges We Must Address</h2>

            <p>
              Environmental pressures threaten ecosystems and
              biodiversity. Understanding these challenges is an
              important step toward meaningful conservation.
            </p>
          </div>

          <div className="challenge-list">
            <div className="challenge-item">
              <span>01</span>
              <div>
                <h3>Plastic and Water Pollution</h3>
                <p>
                  Waste and harmful substances contaminate aquatic
                  environments and threaten wildlife.
                </p>
              </div>
            </div>

            <div className="challenge-item">
              <span>02</span>
              <div>
                <h3>Climate Change</h3>
                <p>
                  Rising temperatures and changing environmental
                  conditions affect aquatic ecosystems.
                </p>
              </div>
            </div>

            <div className="challenge-item">
              <span>03</span>
              <div>
                <h3>Habitat Destruction</h3>
                <p>
                  Damage to natural habitats reduces the space
                  available for species to survive and reproduce.
                </p>
              </div>
            </div>

            <div className="challenge-item">
              <span>04</span>
              <div>
                <h3>Unsustainable Resource Use</h3>
                <p>
                  Activities such as overfishing and irresponsible
                  resource use put pressure on biodiversity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OUR APPROACH */}
        <section className="conservation-approach">
          <div className="conservation-heading">
            <span className="conservation-eyebrow">
              HOW WE APPROACH CONSERVATION
            </span>

            <h2>Turning Awareness Into Action</h2>

            <p>
              Conservation requires knowledge, cooperation and
              responsible action. We believe progress begins
              with informed people working toward shared goals.
            </p>
          </div>

          <div className="approach-grid">
            <article>
              <h3>Learn and Educate</h3>
              <p>
                Share knowledge about environmental challenges
                and the importance of protecting nature.
              </p>
            </article>

            <article>
              <h3>Encourage Participation</h3>
              <p>
                Inspire individuals and communities to take
                part in responsible environmental practices.
              </p>
            </article>

            <article>
              <h3>Build Partnerships</h3>
              <p>
                Encourage collaboration with organizations,
                institutions and conservation stakeholders.
              </p>
            </article>

            <article>
              <h3>Promote Sustainable Practices</h3>
              <p>
                Support choices and practices that reduce
                environmental harm and protect natural resources.
              </p>
            </article>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="conservation-cta">
          <h2>Nature Needs Our Collective Action</h2>

          <p>
            Every effort toward protecting aquatic ecosystems
            and preserving biodiversity contributes to a
            healthier and more sustainable planet.
          </p>

          <a href="/get-involved" className="conservation-button">
            Get Involved
          </a>
        </section>

      </div>
    </HomeLayout>
  );
};

export default Conservation;
