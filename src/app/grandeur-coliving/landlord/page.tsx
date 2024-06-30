import LandlordIntro from '@/app/grandeur-coliving/landlord/LandlordIntro';
import OffersToLandlord from '@/app/grandeur-coliving/landlord/OffersToLandlord';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Wrapper from '@/layouts/Wrapper';

type Props = {};

function index({}: Props) {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <LandlordIntro />
            <OffersToLandlord />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}

export default index;
