import React from 'react';

export const Card: React.FC<{ title: string; text: string }> = ({ title, text }) => {
  return (
    <div className="rounded-lg border p-5 hover:shadow-sm transition">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm leading-6">{text}</p>
    </div>
  );
};
