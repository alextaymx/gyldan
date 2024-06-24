import { useEffect } from "react";
import { gsap } from "gsap";
import { scrollSmother } from "@/utils/scrollSmother";
import { ScrollSmoother } from "@/plugins";
import constants from "@/data/constants";

gsap.registerPlugin(ScrollSmoother);

function RegisterScrollComponent() {
  useEffect(() => {
    if (constants.isProduction) {
      if (typeof window !== "undefined") {
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
