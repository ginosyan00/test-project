import React from 'react';

export const GalleryGrid: React.FC<{ items?: number }> = ({ items = 6 }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {Array.from({ length: items }).map((_, idx) => (
        <div key={idx} className="aspect-square w-full rounded-md bg-gray-100 border" />
      ))}
    </div>
  );
};
