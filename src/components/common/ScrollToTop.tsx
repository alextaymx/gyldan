'use client';
import { debounce } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';

import UseSticky from '@/hooks/UseSticky';

const ScrollToTop = () => {
  const { sticky }: { sticky: boolean } = UseSticky();
  const [showScroll, setShowScroll] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollTop();
    }
  };

  const calculateScrollProgress = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
    );
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
    setScrollProgress(Math.min(scrollPercent, 100));
  }, []);

  const debouncedCalculateProgress = debounce(calculateScrollProgress, 100);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
      debouncedCalculateProgress();
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
      debouncedCalculateProgress.cancel();
    };
  }, [showScroll, debouncedCalculateProgress]);

  return (
    <div
      className={`absolute bottom-8 right-8 z-50 transition-all duration-300 ${
        showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
      }`}
      style={{ position: 'absolute', bottom: '2rem', right: '2rem' }}
    >
      <div className="relative">
        {/* Progress Circle */}
        <svg className="w-12 h-12 -rotate-90">
          <circle
            className="text-gray-200/20 dark:text-gray-700/20"
            strokeWidth="4"
            stroke="currentColor"
            fill="transparent"
            r="20"
            cx="24"
            cy="24"
          />
          <circle
            className="text-[#0064FC] transition-all duration-300"
            strokeWidth="4"
            strokeDasharray={125.6}
            strokeDashoffset={125.6 - (125.6 * scrollProgress) / 100}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="20"
            cx="24"
            cy="24"
          />
        </svg>

        {/* Scroll Button */}
        <button
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            bg-gray-800/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:shadow-xl 
            transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 
            focus:ring-[#0064FC] focus:ring-offset-2 dark:focus:ring-offset-gray-800
            ${sticky ? 'cs_scrollup_show' : ''}`}
          onClick={scrollTop}
          onKeyDown={handleKeyPress}
          aria-label="Scroll to top"
          tabIndex={showScroll ? 0 : -1}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#0064FC]"
          >
            <path
              d="M0 10L1.7625 11.7625L8.75 4.7875V20H11.25V4.7875L18.225 11.775L20 10L10 0L0 10Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ScrollToTop;
