import Navbar from "@/components/layout/navbar";
import About from "@/components/sections/about/about";

import Hero from "@/components/sections/hero/hero";

import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <main className="grow">
        <Hero />
        <About />
      </main>
    </div>
  );
};

export default page;
