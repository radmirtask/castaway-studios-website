import { memo, useRef, useEffect, useState } from 'react';
import styles from './timeline.module.css';

const TimelineItem = memo(function TimelineItem({ year, title, text, image, index = 0, imageAlt = "" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.3, 
        rootMargin: '0px 0px 0px 0px' 
      }
    );
    
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [inView]);

  return (
    <article
      ref={ref}
      className={`${styles.timelineItem} ${inView ? styles.timelineItemInView : ''}`}
      style={{ 
        transitionDelay: `${index * 0.15}s`
      }}
      aria-labelledby={`timeline-title-${year}`}
    >
      <div className={styles.itemYearWrapper}>
        <time className={styles.itemYear} dateTime={year}>{year}</time>
      </div>
      <div className={styles.itemContent}>
        {title && <h3 id={`timeline-title-${year}`} className={styles.itemTitle}>{title}</h3>}
        <div className={styles.itemText} role="text">{text}</div>
        {image && (
          <img 
            src={image} 
            alt={imageAlt || `${title} milestone image`} 
            className={styles.itemImage} 
            loading="lazy" 
            decoding="async" 
          />
        )}
      </div>
    </article>
  );
});

export default TimelineItem;