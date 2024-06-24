"use client";

import AboutHomeFour from "@/components/about/AboutHomeFour";
import CorporateAdvisoryIntro from "@/components/corporate-advisory/CorporateAdvisoryIntro";
import CorporateAdvisoryServices from "@/components/corporate-advisory/CorporateAdvisoryServices";
import CorporateAdvisorySteps from "@/components/corporate-advisory/CorporateAdvisorySteps";
import DetailsBanner from "@/components/details/DetailsBanner";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import HeroServiceDetails from "@/components/hero/HeroServiceDetails";
import ServiceAreaDetails from "@/components/service/ServiceAreaDetails";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";

// export const metadata = {
//   title: "Service Details Vixan - Digital  Creative Agency Next js Template",
// };

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <CorporateAdvisoryIntro />
            <CorporateAdvisorySteps />
            <DetailsBanner />
            <CorporateAdvisoryServices />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
