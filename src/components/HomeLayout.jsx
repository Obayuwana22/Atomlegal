import React from "react";
import {
  Header,
  Hero,
  PracticeAreas,
  // Services,
  About,
  Team,
  Testimonials,
  Contact,
  Footer,
  Insights,
  Sectors,
  Services,
} from "../components";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <PracticeAreas />
        <Sectors />
        <Services />

        {/* <Team /> */}
        {/* <Testimonials /> */}
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
