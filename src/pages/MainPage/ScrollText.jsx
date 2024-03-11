import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ScrollText = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById('text').offsetTop;

      if (scrollPosition > elementPosition) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 100,
        transition: { duration: 0.5 },
      });
    }
  }, [isVisible, controls]);

  return (
    <div id='container'>
      <motion.div
        id='text'
        initial={{ opacity: 0.1, y: 300 }}
        animate={controls}
        className='leading-normal text-neutral'
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollText;
