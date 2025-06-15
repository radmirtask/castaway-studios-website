import { memo, useRef, useEffect, useState } from 'react';

const TimelineItem = memo(function TimelineItem({ year, title, text, image, index = 0, imageAlt = "" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -20% 0px' }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`our-story__item${inView ? ' in-view' : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
      aria-labelledby={`timeline-title-${year}`}
    >
      <div className="our-story__item-year-wrapper">
        <time className="our-story__year" dateTime={year}>{year}</time>
      </div>
      <div className="our-story__item-line">
        <div className="our-story__line" />
        <div className="our-story__dot" />
      </div>
      <div className="our-story__item-content" style={{ minWidth: 0 }}>
        <h3 id={`timeline-title-${year}`} className="our-story__item-title">{title}</h3>
        <div className="our-story__item-text" role="text">{text}</div>
        <img src={image} alt={imageAlt || `${title} milestone image`} className="our-story__image" loading="lazy" decoding="async" />
      </div>
    </article>
  );
});

export default TimelineItem;