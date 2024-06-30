import { gsap } from 'gsap';
import { useEffect } from 'react';

import MouseMove from '@/components/common/MouseMove';
import constants from '@/data/constants';
import { ScrollSmoother, ScrollTrigger } from '@/plugins';
import { scrollSmother } from '@/utils/scrollSmother';

const safeToRender = typeof window !== `undefined` && constants.isProduction;
if (safeToRender) {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

function RegisterScrollComponent() {
  useEffect(() => {
    if (safeToRender) {
      ScrollSmoother.create({
        smooth: 1.35,
        effects: true,
        smoothTouch: false,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });
    }
  }, []);

  useEffect(() => {
    // buttonAnimation()
    // animationTitle()
    if (safeToRender) {
      scrollSmother();
    }
  }, []);
  return safeToRender ? <MouseMove /> : null;
}

export default RegisterScrollComponent;
