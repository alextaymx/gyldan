import PropertyHeadline from '@/app/properties/PropertyHeadline';
import PropertyIntro from '@/app/properties/PropertyIntro';
import ComingSoon from '@/components/coming-soon/ComingSoon';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Wrapper from '@/layouts/Wrapper';

import PropertyPortfolio from './PropertyPortfolio';

type Props = {};

function Index({}: Props) {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <PropertyIntro />
            <PropertyPortfolio />

            {/* <PropertyHeadline /> */}

            <ComingSoon />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}

export default Index;
