'use client';

import dynamic from 'next/dynamic';

import MouseMove from '@/components/common/MouseMove';
import ScrollToTop from '@/components/common/ScrollToTop';
import constants from '@/data/constants';
const RegisterScrollComponent = dynamic(() => import(`@/layouts/RegisterScrollComponent`), {
  ssr: false, // This will disable server-side rendering (SSR)
});

// import { gsap } from "gsap";
// import animationTitle from "@/utils/animationTitle";
// import DarkLight from "@/components/common/DarkLight";
// import { scrollSmother } from "@/utils/scrollSmother";
// import { buttonAnimation } from "@/utils/buttonAnimation";
// import { ScrollSmoother } from "@/plugins";

const Wrapper = ({ children }: any) => {
  // useEffect(() => {
  // buttonAnimation()
  // animationTitle()
  // scrollSmother();
  // }, []);

  return (
    <>
      <RegisterScrollComponent />
      {constants.isProduction ? <MouseMove /> : null}
      {children}
      <ScrollToTop />
      {/* <DarkLight /> */}
    </>
  );
};

export default Wrapper;
