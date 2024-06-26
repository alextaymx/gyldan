import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import landlord_img from '@/assets/img/coliving/landlord/landlord-img.jpg';

interface DataType {
  main_title: string;
  title: string;
  des: string;
  title2?: string;
  des2?: string;
  info: {
    title: string;
    des: string;
  }[];
}

const page_content: DataType = {
  main_title: `Grandeur Coliving`,
  title: `Hey Landlord!`,
  des: `Attention Landlords! Are you still serving your mortgage loan out of your own pocket money?

Let's change that now.`,
  title2: `One Stop Property Management`,
  des2: `Make your unit a high yielding room-rental property. Attract quality tenants who are in need of home away from home. Get the rental to cover your house loan and still get a positive income! Here's how we can help.`,
  info: [],
};

const LandlordIntro = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <section>
        <div className="container">
          <Link href={`/grandeur-coliving`}>
            <div className="cs_section_heading cs_style_1 cs_type_1">
              <div className="cs_section_heading_text anim_text_writting">
                <h2 className="cs_section_title">{page_content.main_title}</h2>
              </div>
            </div>
          </Link>
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
                <h4 className="cs_section_title">{page_content.title}</h4>
                <p className="whitespace-pre-line">{page_content.des}</p>
                <div className="cs_height_50 cs_height_lg_50"></div>

                <h4 className="cs_section_title">{page_content.title2}</h4>
                <p className="whitespace-pre-line">{page_content.des2}</p>

                <div className="cs_height_50 cs_height_lg_50"></div>

                {/* {info.map((item, i) => (
                  <div key={i} className="d-flex">
                    <p className="col-md-2 col-4 cs_medium cs_primary_color">{item.title}</p>
                    <p className="col-md-4 col-10">{item.des}</p>
                  </div>
                ))} */}
              </div>
              <div className="cs_height_50 cs_height_lg_50"></div>
              <div className="cs_btn cs_style_2">
                <a target="_blank" className="cs_center cursor-pointer">
                  Comfort
                </a>
                <a target="_blank" className="cs_center cursor-pointer">
                  Community
                </a>
                <a target="_blank" className="cs_center cursor-pointer">
                  Convenience
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
