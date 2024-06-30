import { gsap } from 'gsap';
import { useEffect, useLayoutEffect } from 'react';

import { ScrollSmoother } from '@/plugins';
import { scrollSmother } from '@/utils/scrollSmother';
// import animationTitle from "@/utils/animationTitle";
// import { buttonAnimation } from "@/utils/buttonAnimation";
// import { ScrollSmoother } from "@/plugins";
gsap.registerPlugin(ScrollSmoother);

function SmoothScrollProvider() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollSmoother);
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
