import { gsap } from 'gsap';
import { useEffect } from 'react';

import constants from '@/data/constants';
import { ScrollSmoother } from '@/plugins';
import { scrollSmother } from '@/utils/scrollSmother';

gsap.registerPlugin(ScrollSmoother);

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
  return null;
}

export default RegisterScrollComponent;
