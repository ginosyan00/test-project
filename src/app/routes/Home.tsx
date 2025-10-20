import React from 'react';
import { Hero } from '../../components/ui/Hero';
import { Section } from '../../components/ui/Section';
import { Card } from '../../components/ui/Card';
import { GalleryGrid } from '../../components/ui/GalleryGrid';
import { Helmet } from 'react-helmet-async';

export const Home: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Woolway — From nature to beauty</title>
        <meta name="description" content="Hand-spun, natural-dyed woolen yarns — Woolway." />
      </Helmet>
      <Hero />
      <Section title="Our principles and methods of yarn production">
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          <Card title="Natural Dyes" text="The dyes we use are strictly plant based and natural." />
          <Card title="Sorting & Washing" text="Short fibers are separated; long fibers are processed into yarns." />
          <Card title="Hand Spinning" text="Hand-washed and air-dried wool is spun by hand in small batches." />
          <Card title="Sourcing" text="We source our wool from select farmers sharing our principles." />
        </div>
      </Section>
      <Section title="Our Gallery">
        <GalleryGrid />
      </Section>
      <Section title="Our Partners">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="aspect-[3/2] w-full rounded-lg thin-border bg-white" />
          ))}
        </div>
      </Section>
    </div>
  );
};
