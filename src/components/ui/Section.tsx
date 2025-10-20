import React from 'react';

export const Section: React.FC<{ title?: string; children: React.ReactNode }> = ({ title, children }) => {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        {title ? <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2> : null}
        <div className={title ? 'mt-6' : ''}>{children}</div>
      </div>
    </section>
  );
};
