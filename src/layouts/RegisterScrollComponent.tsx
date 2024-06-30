import { gsap } from 'gsap';
import { useEffect } from 'react';

import MouseMove from '@/components/common/MouseMove';
import constants from '@/data/constants';
import { ScrollSmoother, ScrollTrigger } from '@/plugins';
import { scrollSmother } from '@/utils/scrollSmother';

gsap.registerPlugin(ScrollSmoother);
gsap.registerPlugin(ScrollTrigger);

function RegisterScrollComponent() {
  useEffect(() => {
    if (constants.isProduction) {
      if (typeof window !== `undefined`) {
        ScrollSmoother.create({
          smooth: 1.35,
          effects: true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      }
    }
  }, []);

  useEffect(() => {
    // buttonAnimation()
    // animationTitle()
    if (constants.isProduction) {
      scrollSmother();
    }
  }, []);
  return constants.isProduction ? <MouseMove /> : null;
}

export default RegisterScrollComponent;
