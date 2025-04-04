'use client';
import Image from 'next/image';
import Link from 'next/link';

import OffersToTenantDetails from '@/app/grandeur-coliving/tenant/OffersToTenantDetails';
import image_1 from '@/assets/img/coliving/tenant/tenant-offers.png';

const OffersToTenant = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1">
            <div className="cs_section_heading_text">
              <h2 className="text-center cs_section_title_2 anim_heading_title">
                What to expect?{' '}
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_50"></div>

          {/* <Image src={image_1} alt="offers" className="w-full" /> */}
          <OffersToTenantDetails />
        </div>
      </section>

      <div className="container text-center">
        <div className="cs_height_100 cs_height_lg_50"></div>

        <div className="cs_back_to_services_btn">
          <Link
            href="/grandeur-coliving"
            className="flex items-center justify-center gap-3 cs_style_1"
          >
            <span>Back To Coliving</span>
            <svg
              width="19"
              height="13"
              viewBox="0 0 19 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default OffersToTenant;
