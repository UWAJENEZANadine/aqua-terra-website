
import React from "react";
import Header from "./header";
import Footer from "./footer";
import "./homeLayout.css";

const HomeLayout = ({ children }) => {
  return (
    <div className="website-layout">

      {/* Website Header */}
      <Header />

      {/* Main Page Content */}
      <main className="home-container">
        {children}
      </main>

      {/* Website Footer */}
      <Footer />

    </div>
  );
};

export default HomeLayout;
