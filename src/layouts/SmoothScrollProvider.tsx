import { gsap } from 'gsap';
import { useEffect, useLayoutEffect } from 'react';

import { ScrollSmoother, ScrollTrigger } from '@/plugins';
import { scrollSmother } from '@/utils/scrollSmother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function SmoothScrollProvider() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    const ctx = gsap.context(() => {
      ScrollSmoother.create({
        smooth: 1.35,
        effects: true,
        smoothTouch: false,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // buttonAnimation()
    // animationTitle()
    scrollSmother();
  }, []);

  return <>{/* <MouseMove /> */}</>;
}

export default SmoothScrollProvider;
