import React from 'react';
import { Section } from '../../components/ui/Section';

export const Contact: React.FC = () => {
  return (
    <div>
      <Section title="Contact us">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium">CONTACT</h3>
            <ul className="mt-2 text-gray-700 space-y-1 text-sm">
              <li>+374 33 96 65 26</li>
              <li>woolway.am@gmail.com</li>
            </ul>
            <h3 className="mt-6 font-medium">WORKING HOURS</h3>
            <ul className="mt-2 text-gray-700 space-y-1 text-sm">
              <li>Mon-Fri 10:00 - 19:00</li>
              <li>Sat 12:00 - 16:00</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Write to us</h3>
            <p className="mt-2 text-gray-700 text-sm">We will get back to you soon.</p>
            <a className="mt-4 inline-block rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700" href="mailto:woolway.am@gmail.com">Send email</a>
          </div>
        </div>
      </Section>
    </div>
  );
};
