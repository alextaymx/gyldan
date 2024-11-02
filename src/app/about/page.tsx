'use client';

import { useState } from 'react';

import About from '@/components/about/About';
import BannerAbout from '@/components/brand/BannerAbout';
import BrandHomeOne from '@/components/brand/BrandHomeOne';
import MarqueeAreaHomeOne from '@/components/brand/MarqueeAreaHomeOne';
import FunFactHomeOne from '@/components/funfact/FunFactHomeOne';
import Gellary from '@/components/gellary/Gellary';
import VideoPopup from '@/components/modals/VideoPopup';
import TeamHomeTwo from '@/components/team/TeamHomeTwo';
import Testimonial from '@/components/testimonial/Testimonial';
import VideoHomeOne from '@/components/video/VideoHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Wrapper from '@/layouts/Wrapper';

// export const metadata = {
//   title: "About Vixan - Digital  Creative Agency Next js Template",
// };

const Index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* <BannerAbout /> */}
            {/* <VideoHomeOne style_2={true} setIsVideoOpen={setIsVideoOpen} /> */}
            {/* <FunFactHomeOne style_3={true} /> */}
            <About />
            {/* <TeamHomeTwo style_2={true} style_3={true} /> */}
            {/* <AwardsHomeOne style_2={true} /> */}
            <Testimonial />
            <Gellary style_2={true} />
            {/* <BrandHomeOne /> */}
            {/* <MarqueeAreaHomeOne /> */}
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
