import React from 'react';

export const GalleryGrid: React.FC<{ items?: number }> = ({ items = 6 }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {Array.from({ length: items }).map((_, idx) => (
        <div
          key={idx}
          className="group aspect-square w-full overflow-hidden rounded-lg thin-border bg-white"
        >
          <div className="h-full w-full bg-gray-100 transition-transform duration-300 group-hover:scale-[1.01]" />
        </div>
      ))}
    </div>
  );
};
