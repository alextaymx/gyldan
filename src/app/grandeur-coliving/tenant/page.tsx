import OffersToTenant from '@/app/grandeur-coliving/tenant/OffersToTenant';
import TenantIntro from '@/app/grandeur-coliving/tenant/TenantIntro';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Wrapper from '@/layouts/Wrapper';

type Props = {};

function Index({}: Props) {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <TenantIntro />
            <OffersToTenant />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}

export default Index;
