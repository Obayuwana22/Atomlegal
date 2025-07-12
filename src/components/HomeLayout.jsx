import React from "react";
import {
  Header,
  Hero,
  Services,
  About,
  Team,
  Testimonials,
  Contact,
  Footer,
} from "../components";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
