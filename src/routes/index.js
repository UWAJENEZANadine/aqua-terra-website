
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../views/home";
import AboutUs from "../views/aboutUs";
import OurWork from "../views/ourWork";
import Conservation from "../views/conservation";
import News from "../views/news";
import GetInvolved from "../views/getInvolved";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Main Pages */}
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/our-work" element={<OurWork />} />

      {/* Existing pages - temporary routes */}
      <Route path="/conservation" element={<Conservation />} />
      <Route path="/news" element={<News />} />
      <Route path="/get-involved" element={<GetInvolved />} />
    </Routes>
  );
};

export default Index;
