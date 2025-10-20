import React from 'react';

export const Section: React.FC<{ title?: string; children: React.ReactNode }> = ({ title, children }) => {
  return (
    <section className="section-y">
      <div className="container-page">
        {title ? <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2> : null}
        <div className={title ? 'mt-6' : ''}>{children}</div>
      </div>
    </section>
  );
};
