import React from 'react';
import { Section } from '../../components/ui/Section';

export const About: React.FC = () => {
  return (
    <div>
      <Section title="About the Woolway Company">
        <p className="text-gray-700 max-w-3xl">
          The Woolway Company has been created with the collaboration of three visionaries —
          Hayk Oltaci, Mariam Nalbandyan, and Ruzanna Torozyan. Founded in 2020, Woolway is an
          eco-friendly company producing hand-spun and natural-dyed woolen yarns used for hand-woven
          rugs, fabrics, and restoration of antique Oriental rugs and tapestries.
        </p>
      </Section>
    </div>
  );
};
