import AboutHomeFour from '@/components/about/AboutHomeFour';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Wrapper from '@/layouts/Wrapper';

import LandlordIntro from '@/app/grandeur-coliving/landlord/LandlordIntro';
import ServiceTeam from '@/components/service/ServiceTeam';

type Props = {};

function index({}: Props) {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <LandlordIntro />
            <ServiceTeam />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}

export default index;
