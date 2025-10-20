import React from 'react';
import { Section } from '../../components/ui/Section';

export const Message: React.FC = () => {
  return (
    <div>
      <Section title="A MESSAGE">
        <p className="text-gray-700 max-w-3xl">Full message content will be placed here.</p>
      </Section>
    </div>
  );
};
