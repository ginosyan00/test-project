import React from 'react';

export const Card: React.FC<{ title: string; text: string }> = ({ title, text }) => {
  return (
    <div className="rounded-xl thin-border p-6 md:p-7 hover:shadow-[0_6px_24px_-12px_rgba(0,0,0,0.2)] transition-shadow bg-white">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-700 text-sm leading-7">{text}</p>
    </div>
  );
};
