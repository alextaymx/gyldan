import Image from 'next/image';
import React from 'react';

import landlord_img from '@/assets/img/coliving/landlord/landlord-img.jpg';

interface DataType {
  des: string;
  info: {
    title: string;
    des: string;
  }[];
}

const team_content: DataType = {
  des: `Attention Landlords! Are you still serving your mortgage loan out of your own pocket money?

Let's change that now.`,
  info: [
    {
      title: `Address:`,
      des: `2118 Thornridge Cir, 35624`,
    },
    {
      title: `Email:`,
      des: `example@example.com`,
    },
    {
      title: `Phone:`,
      des: `+7 (903) 679-96-15`,
    },
    {
      title: `website:`,
      des: `www.website.com`,
    },
  ],
};

const { des, info } = team_content;

const LandlordIntro = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text anim_text_writting">
              <h2 className="cs_section_title">Hey Landlord!</h2>
            </div>
          </div>
        </div>
      </section>

      <div className="cs_height_100 cs_height_lg_60"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <Image src={landlord_img} alt="landlord-side" />
            <div className="cs_height_lg_30"></div>
          </div>
          <div className="col-md-7">
            <div className="cs_team_details">
              <div className="cs_team_details_text">
                <p>{des}</p>
                <div className="cs_height_50 cs_height_lg_50"></div>

                {info.map((item, i) => (
                  <div key={i} className="d-flex">
                    <p className="col-md-2 col-4 cs_medium cs_primary_color">{item.title}</p>
                    <p className="col-md-4 col-10">{item.des}</p>
                  </div>
                ))}
              </div>
              <div className="cs_height_50 cs_height_lg_50"></div>
              <div className="cs_btn cs_style_2">
                <a target="_blank" href="https://behance.com" className="cs_center">
                  Behance
                </a>
                <a target="_blank" href="https://dribbble.com" className="cs_center">
                  Dribbble
                </a>
                <a target="_blank" href="https://github.com" className="cs_center">
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default LandlordIntro;
