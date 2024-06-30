'use client';

import React from 'react';

import AboutHomeFour from '@/components/about/AboutHomeFour';
import BlogHomeOne from '@/components/blog/BlogHomeOne';
import HeroHomeFour from '@/components/hero/HeroHomeFour';
import PortfolioHomeFour from '@/components/portfolio/PortfolioHomeFour';
import ServiceHomeFour from '@/components/service/ServiceHomeFour';
import Testimonial from '@/components/testimonial/Testimonial';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Wrapper from '@/layouts/Wrapper';

// export const metadata = {
//   title: "Creative Protfolio Vixan - Digital  Creative Agency Next js Template",
// };

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroHomeFour />
            <ServiceHomeFour />
            <PortfolioHomeFour />
            <Testimonial />
            <BlogHomeOne style_2={true} />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
