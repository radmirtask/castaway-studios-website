import { memo, useRef, useEffect, useState } from 'react';
import styles from './timeline.module.css';

const Timeline = memo(function Timeline({ children }) {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const timelineRef = useRef(null);
  const scrollLineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Title visibility observer
  useEffect(() => {
    const titleElement = titleRef.current;
    
    if (!titleElement) return;

    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !titleVisible) {
          setTitleVisible(true);
          titleObserver.disconnect();
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '20px 0px 0px 0px' 
      }
    );

    titleObserver.observe(titleElement);

    return () => titleObserver.disconnect();
  }, [titleVisible]);

  // Section visibility observer
  useEffect(() => {
    const sectionElement = sectionRef.current;
    
    if (!sectionElement) return;

    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px 0px 0px'
      }
    );

    sectionObserver.observe(sectionElement);

    return () => sectionObserver.disconnect();
  }, [isVisible]);

  // Scroll line animation - initialize immediately without waiting for visibility
  useEffect(() => {
    const section = sectionRef.current;
    const line = scrollLineRef.current;
    const timeline = timelineRef.current;
    
    if (!section || !line || !timeline) return;

    let maxHeight = 0;
    let animationFrameId = null;

    function onScroll() {
      if (animationFrameId) return;
      
      animationFrameId = requestAnimationFrame(() => {
        const sectionRect = section.getBoundingClientRect();
        const timelineRect = timeline.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate how much of the section is visible
        const sectionTop = sectionRect.top;
        const sectionHeight = sectionRect.height;
        const sectionBottom = sectionTop + sectionHeight;
        
        // Start animation when section enters viewport
        if (sectionBottom > 0 && sectionTop < windowHeight) {
          // Calculate progress through the timeline
          const timelineHeight = timelineRect.height;
          const scrollProgress = Math.min(Math.max((windowHeight - sectionTop) / (windowHeight + sectionHeight), 0), 1);
          
          // Calculate responsive bottom spacing based on viewport width
          const viewportWidth = window.innerWidth;
          let bottomSpacing;
          if (viewportWidth <= 767) {
            bottomSpacing = 64; // 4rem for mobile
          } else {
            bottomSpacing = 96; // 6rem for desktop/tablet
          }
          
          // Calculate the available height for the timeline line
          const availableHeight = sectionHeight - bottomSpacing;
          const targetHeight = scrollProgress * availableHeight;
          
          // Only allow the line to grow, never shrink
          if (targetHeight > maxHeight) {
            maxHeight = targetHeight;
            line.style.height = `${Math.min(maxHeight, availableHeight)}px`;
          }
          
          // Mark as animated when we reach significant progress
          if (scrollProgress > 0.8 && !hasAnimated) {
            setHasAnimated(true);
          }
        }
        
        animationFrameId = null;
      });
    }

    // Add a small delay to ensure elements are properly mounted
    const timeoutId = setTimeout(() => {
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll(); // Initialize on mount
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', onScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []); // Remove dependencies so it runs immediately on mount

  return (
    <section 
      ref={sectionRef}
      className={`${styles.ourStory} ${isVisible ? styles.ourStoryVisible : ''}`} 
      aria-labelledby="our-story-title"
    >
      <h2 
        ref={titleRef}
        id="our-story-title" 
        className={`${styles.ourStoryTitle} ${titleVisible ? styles.ourStoryTitleVisible : ''}`}
      >
        Our Story
      </h2>
      <div className={`${styles.timelineWrapper} ${isVisible ? styles.timelineWrapperVisible : ''}`}>
        <div className={styles.timelineContainer}>
          <div ref={scrollLineRef} className={styles.timelineScrollLine} />
          <div ref={timelineRef} className={styles.timelineItems} role="list">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Timeline;