import React, { useEffect, useRef } from 'react';
import styles from './DevelopmentPath.module.css';

const TIMELINE = [
  {
    number: 'one.png',
    icon: 'map.png',
    title: 'Concept & Design',
    desc: 'We start with innovative ideas and create compelling game concepts that push the boundaries of interactive entertainment.'
  },
  {
    number: 'two.png',
    icon: 'wheel.png',
    title: 'Development',
    desc: 'Our expert team brings concepts to life using cutting-edge technology and proven development methodologies.'
  },
  {
    number: 'three.png',
    icon: 'Isolation_Mode.png',
    title: 'Testing & Polish',
    desc: 'Rigorous testing and refinement ensure every game quality and player experience.'
  },
  {
    number: 'four.png',
    icon: 'cannon.png',
    title: 'Launch',
    desc: 'Strategic launch campaigns and ongoing support help our games achieve their full potential in the market.'
  }
];

const img = (file, alt) => <img src={`/home/roadmap/${file}`} alt={alt} draggable="false" />;

function TimelineItem({ number, icon, title, desc, align }) {
  const ref = useRef();
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles['timeline-item_in-view']);
        } else {
          el.classList.remove(styles['timeline-item_in-view']);
        }
      }, {
        threshold: 0.0,
        rootMargin: '0px 0px -40% 0px'
      });


    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`${styles['timeline-item']} ${styles[`timeline-item_${align}`]}`}> 
      <span className={styles['timeline-item__badge']} aria-hidden="true">{img(number, '')}</span>
      <span className={styles['timeline-item__icon']} aria-hidden="true">{img(icon, '')}</span>
      <div className={styles['timeline-item__content']}>
        <h3 className={styles['timeline-item__title']}>{title}</h3>
        <div className={styles['timeline-item__desc']}>{desc}</div>
      </div>
    </div>
  );
}


export default function DevelopmentPath() {
    const scrollLineRef = useRef();
    const timelineRef = useRef();

    useEffect(() => {
        const section = timelineRef.current.parentElement; // the <section> wrapper
        const line = scrollLineRef.current;
      
        function onScroll() {
          const { top, height } = section.getBoundingClientRect();
          const windowHeight = window.innerHeight;
      
          // Compute “progress” from 0 (section just entering view) to 1 (bottom of section hits top of viewport)
          const progress = Math.min(Math.max((windowHeight - top) / (windowHeight + height), 0), 1);
      
          // Set the line’s height as a fraction of the full timeline container
          line.style.height = `${progress * height}px`;
        }
      
        window.addEventListener('scroll', onScroll);
        onScroll(); // initialize on mount
      
        return () => window.removeEventListener('scroll', onScroll);
      }, []);
      

  return (
    <section className={styles['development-path']} role="region" aria-label="Our Development Path Timeline">
      <h2 className={styles['development-path__heading']}>OUR DEVELOPMENT PATH</h2>
      <div className={styles['development-path__timeline']}></div>
      <div ref={timelineRef} className={styles['development-path__timeline']}>
        <div ref={scrollLineRef} className={styles['development-path__scrollline']}></div>
      </div>
      <div className={styles['development-path__items']}>
        {TIMELINE.map((item, i) => (
          <TimelineItem key={i} {...item} align={i % 2 === 0 ? 'right' : 'left'} />
        ))}
      </div>
      {/* <img
    src="/home/roadmap/bottom.svg"
    aria-hidden="true"
    className={styles['development-path__bottom-img']}
  /> */}
    </section>
  );
} 