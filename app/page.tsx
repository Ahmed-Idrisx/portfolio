import Navbar from "@/components/layout/navbar";

import Hero from "@/components/sections/hero/hero";

import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <main className="grow">
        <Hero />
      </main>
    </div>
  );
};

export default page;
