import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useLayoutEffect } from 'react';

import MouseMove from '@/components/common/MouseMove';
// import animationTitle from "@/utils/animationTitle";
// import { buttonAnimation } from "@/utils/buttonAnimation";
import { ScrollSmoother } from '@/plugins';
// import MouseMove from '@/components/common/MouseMove';
import { scrollSmother } from '@/utils/scrollSmother';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function SmoothScrollProvider() {
  useLayoutEffect(() => {
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

  return (
    <>
      <MouseMove />
    </>
  );
}

export default SmoothScrollProvider;
