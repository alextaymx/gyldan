import Image from 'next/image';
import React from 'react';

import banner_img from '@/assets/img/service_details_banner.jpg';

interface DataType {
  title: string;
  description: string;
  features: string[];
}
const hero_contact: DataType = {
  title: `GRANDEUR SUITES HOMESTAY MANAGEMENT`,
  description: `From property maintenance to guest handling, our comprehensive services take care of all homestay management needs so you can enjoy peace of mind.`,
  features: [
    `Regular Maintenance & Cleaning`,
    `Well-Curated Listings`,
    `Admin Support`,
    `Excellent Concierge Management`,
  ],
};
const { title, description, features } = hero_contact;
type Props = {};

function CorporateAdvisoryIntro({}: Props) {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting">{title}</h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_service_details">
            <div className="cs_service_details_img">
              <div className="cs_style_img">
                <Image src={banner_img} alt="service_details_banner" />
              </div>
            </div>
            <div className="cs_service_details_text">
              <div className="cs_service_details_p">
                <p className="anim_text" style={{ whiteSpace: `pre-line` }}>
                  {description}
                </p>
                <ul className="anim_div_ShowDowns">
                  {features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CorporateAdvisoryIntro;
