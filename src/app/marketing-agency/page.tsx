'use client';

import React, { useState } from 'react';

import AboutHomeFour from '@/components/about/AboutHomeFour';
import AwardsHomeOne from '@/components/awards/AwardsHomeOne';
import BlogHomeOne from '@/components/blog/BlogHomeOne';
import BrandHomeOne from '@/components/brand/BrandHomeOne';
import FeatureHomeTwo from '@/components/feature/FeatureHomeTwo';
import FunFactHomeOne from '@/components/funfact/FunFactHomeOne';
import HeroHomeFive from '@/components/hero/HeroHomeFive';
import VideoPopup from '@/components/modals/VideoPopup';
import PortfolioHomeFive from '@/components/portfolio/PortfolioHomeFive';
import ServiceHomeFive from '@/components/service/ServiceHomeFive';
import TeamHomeTwo from '@/components/team/TeamHomeTwo';
import Testimonial from '@/components/testimonial/Testimonial';
import VideoHomeFive from '@/components/video/VideoHomeFive';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Wrapper from '@/layouts/Wrapper';

// export const metadata = {
//   title: "Marketing Agency Vixan - Digital  Creative Agency Next js Template",
// };

const Index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroHomeFive />
            <VideoHomeFive setIsVideoOpen={setIsVideoOpen} />
            <ServiceHomeFive />
            <FeatureHomeTwo style_2={true} />
            <PortfolioHomeFive />
            <FunFactHomeOne style_2={true} />
            <AwardsHomeOne />
            <Testimonial />
            <TeamHomeTwo style_2={true} />
            <BrandHomeOne style_2={true} />
            <BlogHomeOne style_2={true} />
            <AboutHomeFour />
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
