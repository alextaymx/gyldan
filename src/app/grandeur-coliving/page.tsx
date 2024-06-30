import ColivingRedirect from '@/app/grandeur-coliving/ColivingRedirect';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Wrapper from '@/layouts/Wrapper';

import GrandeurIntro from './GrandeurIntro';

type Props = {};

function index({}: Props) {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <GrandeurIntro />
            <ColivingRedirect />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}

export default index;
