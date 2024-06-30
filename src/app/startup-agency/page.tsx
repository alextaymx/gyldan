'use client';

import React, { useState } from 'react';

import AboutUs from '@/components/about/AboutUs';
import AwardsHomeOne from '@/components/awards/AwardsHomeOne';
import BlogHomeTwo from '@/components/blog/BlogHomeTwo';
import BrandHomeOne from '@/components/brand/BrandHomeOne';
import MarqueeAreaHomeTwo from '@/components/brand/MarqueeAreaHomeTwo';
import FeatureHomeTwo from '@/components/feature/FeatureHomeTwo';
import HeroHomeTwo from '@/components/hero/HeroHomeTwo';
import InnovativeHomeTwo from '@/components/innovative/InnovativeHomeTwo';
import VideoPopup from '@/components/modals/VideoPopup';
import PortfolioHomeOne from '@/components/portfolio/PortfolioHomeOne';
import ServiceHomeTwo from '@/components/service/ServiceHomeTwo';
import TeamHomeTwo from '@/components/team/TeamHomeTwo';
import Testimonial from '@/components/testimonial/Testimonial';
import VideoHomeTwo from '@/components/video/VideoHomeTwo';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Wrapper from '@/layouts/Wrapper';

// export const metadata = {
//   title: "Startup Agency - Creative Agency Next js Template",
// };

const Index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroHomeTwo />
            <VideoHomeTwo setIsVideoOpen={setIsVideoOpen} />
            <InnovativeHomeTwo />
            <MarqueeAreaHomeTwo />
            <FeatureHomeTwo />
            <ServiceHomeTwo />
            <PortfolioHomeOne />
            <AwardsHomeOne />
            <Testimonial />
            <TeamHomeTwo style_2={true} />
            <BrandHomeOne style_2={true} />
            <AboutUs style_2={true} />
            <BlogHomeTwo />
          </main>
          <FooterOne />
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={`Qj06rNemNI8`}
      />
      {/* video modal end */}
    </Wrapper>
  );
};

export default Index;
