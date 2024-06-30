'use client';
import React from 'react';

import AboutHomeFour from '@/components/about/AboutHomeFour';
import TeamDetailsArea from '@/components/details/TeamDetailsArea';
import ServiceTeam from '@/components/service/ServiceTeam';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Wrapper from '@/layouts/Wrapper';

// export const metadata = {
//   title: "Team Details Vixan - Digital  Creative Agency Next js Template",
// };

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <TeamDetailsArea />
            <ServiceTeam />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
