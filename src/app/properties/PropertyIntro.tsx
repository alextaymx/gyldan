import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import banner_img from '@/assets/img/property/property_intro.png';

interface DataType {
  title: string;
  description: string;
  features: string[];
}
const hero_contact: DataType = {
  title: `Grandeur Properties`,
  description: `At Gyldan Properties, we specialize in providing exceptional commercial property management and real estate investment services. Whether you're a property owner, a tenant, or looking for your next investment opportunity, we're here to guide you through every step of the process with professionalism and expertise. `,
  features: [
    'Commercial Management',
    'Retail Management',
    'Renovation & Refurbishment',
    'Marketing & Leasing',
  ],
};
const { title, description, features } = hero_contact;
type Props = {};

function PropertyIntro({}: Props) {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <section className="cs_primary_bg">
        <div className="container">
          <div className="cs_height_60 cs_height_lg_30"></div>
          <div className="cs_section_heading cs_style_1 cs_type_1 cs_color_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting">{title}</h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_service_details">
            <div className="cs_service_details_img">
              <div className="cs_style_img">
                <Image src={banner_img} height={400} alt="service_details_banner" />
              </div>
            </div>
            <div className="cs_service_details_text" style={{ color: `white` }}>
              <div className="cs_service_details_p cs_section_title">
                <p
                  className="anim_text cs_section_title text-justify"
                  style={{ whiteSpace: `pre-line` }}
                >
                  {description}
                </p>
                <ul hidden className="anim_div_ShowDowns">
                  {features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                {/* test */}
                <div className="cs_section_heading_right cs_btn_anim md:mt-10 xl:mt-20">
                  <Link href="/properties" className="cs_btn cs_style_1 text-white">
                    <span>Learn more</span>
                    <svg
                      width="19"
                      height="13"
                      viewBox="0 0 19 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038
                                          11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_60 cs_height_lg_30"></div>
      </section>

      <section
        className="cs_property_showcase"
        style={{
          backgroundImage: `url(${banner_img.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          padding: '120px 0',
        }}
      >
        <div
          className="cs_overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}
        ></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="cs_property_content text-center">
            <h2 className="cs_section_title cs_fs_72 cs_white_color mb-4 anim_text_writting">
              Gyldan Properties: Your Commercial Property Partner
            </h2>
            <h3 className="cs_fs_32 cs_white_color mb-5 anim_text">
              Specializing in Complex Shoplots, Warehouses, Lands, and Malls.
            </h3>
            <Link href="/properties/gallery" className="cs_btn cs_style_1 cs_btn_lg">
              <span>Explore Our Properties</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default PropertyIntro;
