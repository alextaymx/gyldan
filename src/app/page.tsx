'use client';

import AboutHomeOne from '@/components/about/AboutHomeOne';
import AboutUs from '@/components/about/AboutUs';
import BlogHomeOne from '@/components/blog/BlogHomeOne';
import BrandHomeOne from '@/components/brand/BrandHomeOne';
import MarqueeAreaHomeThree from '@/components/brand/MarqueeAreaHomeThree';
import FeatureHomeTwo from '@/components/feature/FeatureHomeTwo';
import HeroHomeOne from '@/components/hero/HeroHomeOne';
import ServiceHomeTwo from '@/components/service/ServiceHomeTwo';
import SubscribeHomeOne from '@/components/subscribe/SubscribeHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Wrapper from '@/layouts/Wrapper';

// export const metadata = {
//   title: "Gyldan - Management & Consulting Firm | Gyldan Group",
// };

const index = () => {
  // const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* <HeroHomeFour /> */}
            <HeroHomeOne />
            <ServiceHomeTwo />

            {/* <ServiceHomeOne /> */}
            <FeatureHomeTwo />
            {/* <MarqueeAreaHomeThree /> */}
            <AboutHomeOne />
            {/* <PortfolioHomeOne /> */}
            {/* <AwardsHomeOne /> */}
            <AboutUs />
            {/* <FunFactHomeOne /> */}
            {/* <VideoHomeOne setIsVideoOpen={setIsVideoOpen} /> */}
            {/* <Testimonial /> */}

            {/* <BlogHomeOne /> */}

            {/* <SubscribeHomeOne /> */}
            {/* <BrandHomeOne style_2={true} /> */}
            {/* <BrandHomeOne style_2={false} /> */}
            {/* <MarqueeAreaHomeOne /> */}
          </main>
          <FooterOne />
        </div>
      </div>

      {/* video modal start */}
      {/* <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Qj06rNemNI8"}
      /> */}
      {/* video modal end */}
    </Wrapper>
  );
};

export default index;
