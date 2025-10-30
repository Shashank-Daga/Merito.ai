"use client"

import { useEffect } from 'react';

interface UseRevealAnimationOptions {
  stagger?: boolean;
}

export const useRevealAnimation = (options: UseRevealAnimationOptions = {}) => {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-element');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const delay = options.stagger ? index * 125 : 0; // 125ms delay for stagger (midpoint of 100-150ms)
            setTimeout(() => {
              entry.target.classList.add('reveal');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [options.stagger]);
};
