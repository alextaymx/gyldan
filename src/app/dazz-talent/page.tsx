import ComingSoon from '@/components/coming-soon/ComingSoon';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';

type Props = {};

function Index({}: Props) {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <ComingSoon />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}

export default Index;
