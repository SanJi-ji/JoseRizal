
import React from "react";
import Hero from "@/components/home/Hero";
import FeaturedWorks from "@/components/home/FeaturedWorks";
import BiographyPreview from "@/components/home/BiographyPreview";
import TimelinePreview from "@/components/home/TimelinePreview";
import Gallery from "@/components/home/Gallery";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <BiographyPreview />
      <FeaturedWorks />
      <TimelinePreview />
      <Gallery />
    </main>
  );
};

export default HomePage;
