import { memo } from 'react';
import './timeline.css';

const Timeline = memo(function Timeline({ children }) {
  return (
    <section className="our-story" aria-labelledby="our-story-title">
      <h2 id="our-story-title" className="our-story__title">
        Our Story
      </h2>
      <div className="our-story__timeline-wrapper">
        <div className="our-story__items" role="list">
          {children}
        </div>
      </div>
    </section>
  );
});

export default Timeline;