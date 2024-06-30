import Image from 'next/image';
import React from 'react';

import banner_img from '@/assets/img/service_details_banner.jpg';

interface DataType {
  title: string;
  description: string;
  features: string[];
}
const hero_contact: DataType = {
  title: `Grandeur Coliving`,
  description: `Welcome to Grandeur Coliving, where both landlords and tenants find their perfect match. Our mission is to curate the ideal living space – a lucrative investment for landlords and a true home away from home for tenants. With a focus on redefining property management, we specialize in fostering a harmonious coliving community, ensuring an exceptional experience for all. `,
  features: [],
};
const { title, description, features } = hero_contact;
type Props = {};

function GrandeurIntro({}: Props) {
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
                <Image src={banner_img} alt="service_details_banner" />
              </div>
            </div>
            <div className="cs_service_details_text" style={{ color: `white` }}>
              <div className="cs_service_details_p cs_section_title">
                <p className="anim_text cs_section_title" style={{ whiteSpace: `pre-line` }}>
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
        <div className="cs_height_60 cs_height_lg_30"></div>
      </section>
    </>
  );
}

export default GrandeurIntro;
