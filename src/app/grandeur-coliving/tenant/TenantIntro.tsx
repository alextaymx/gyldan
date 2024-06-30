import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import tenant_img from '@/assets/img/coliving/tenant/tenant-img.jpg';

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
  title: `Hey Tenant!`,
  des: `You've come to right place, at Grandeur Coliving we give you the same promise we give our landlords - seamless tenant management!`,

  title2: `What's in it for you?`,
  des2: `At Grandeur Coliving, we give you the same promise we give our landlords – seamless tenant management! Staying at our rental apartments, you have the comfort of a home. Grandeur Coliving strives to provide top notch tenant management so you don’t have to worry about forgetting your monthly obligations of renting away from home. We will ensure an A-to-Z assistance from your room viewing, checking-in, settling-in and and checking-out. 

At Grandeur Coliving, you belong to a community of good company, friends and friendly tenant managers. Guaranteed security, privacy, yet we are ever-ready to assist you on any matters while you’re with us! Providing you with peace of mind that we’ve got your back! 

Come aboard if you’re looking for a fun and inclusive co-living environment! Plenty of activities with your housemates, property-mates with movie nights, barbecue nights, mamak-nights, hiking weekends and some excursion trips together!`,
  info: [],
};

const TenantIntro = () => {
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
            <Image src={tenant_img} alt="landlord-side" />
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

export default TenantIntro;
