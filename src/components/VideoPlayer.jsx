import React from 'react';

export default function VideoPlayer({ src, poster }) {
  return (
    <div className="my-8">
      <video
        src={src}
        poster={poster}
        controls
        className="w-full max-h-[500px] rounded-lg shadow-lg"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
