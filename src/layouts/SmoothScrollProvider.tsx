import { gsap } from 'gsap';
import { useEffect, useLayoutEffect } from 'react';

import MouseMove from '@/components/common/MouseMove';
import { ScrollSmoother, ScrollTrigger } from '@/plugins';
import { scrollSmother } from '@/utils/scrollSmother';
// import animationTitle from "@/utils/animationTitle";
// import { buttonAnimation } from "@/utils/buttonAnimation";
// import { ScrollSmoother } from "@/plugins";
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

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
