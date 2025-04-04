'use client';

import AboutHomeFour from '@/components/about/AboutHomeFour';
import DetailsBanner from '@/components/details/DetailsBanner';
import SuitesIntro from '@/components/suites/SuitesIntro';
import SuitesServices from '@/components/suites/SuitesServices';
import SuitesSteps from '@/components/suites/SuitesSteps';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Wrapper from '@/layouts/Wrapper';

// export const metadata = {
//   title: "Service Details Vixan - Digital  Creative Agency Next js Template",
// };

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <SuitesIntro />
            <SuitesSteps />
            <DetailsBanner />
            <SuitesServices />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
