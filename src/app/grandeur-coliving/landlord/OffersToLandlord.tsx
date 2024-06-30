'use client';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

import image_1 from '@/assets/img/coliving/landlord/service-1.jpeg';
import image_2 from '@/assets/img/coliving/landlord/service-2.jpg';
import image_3 from '@/assets/img/coliving/landlord/service-3.jpg';
import image_4 from '@/assets/img/coliving/landlord/service-4.png';

interface DataType {
  id: number;
  count: number;
  title: string;
  des: string;
  image: StaticImageData;
}

const service_data: DataType[] = [
  {
    id: 1,
    count: 99,
    title: `Design, Space Planning, Renovation & Building`,
    des: `We provide a cost-effective renovation and facelift services for property units to attract more quality tenants for your unit.`,
    image: image_1,
  },
  {
    id: 2,
    count: 85,
    title: `Tenant Filtration, Management & Rental Collection`,
    des: `With our experienced partners of team of agents, in-house customer service, property facilitator, and more, we guarantee a seamless and effective tenant management service, both for the benefit of our landlords, as well as tenants for them to have a peaceful stay with homey vibes.`,
    image: image_2,
  },
  {
    id: 3,
    count: 80,
    title: `Maintenance, Upkeep and Housekeeping`,
    des: `Our renovation team and contractors are always readily available to attend to faults in your units to ensure the continuity of tenant comfort, as well as keeping utilities expenses in the low. We take this very seriously as we are dedicated to provide the best services for each and every unit that we manage, so you can leave the dirty work to us and you can focus on doing the things that matters most.`,
    image: image_3,
  },
  {
    id: 4,
    count: 99,
    title: `Property Advertising & Marketing`,
    des: `Similarly, our experienced Real Estate Agent and Negotiator partners will ensure continuous promotion of your unit and we can guarantee that your properties will be fully rented-out in more or less 30 days only!`,
    image: image_4,
  },
];

const OffersToLandlord = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title_2 anim_heading_title">Skill & Specialist</h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_50"></div>
          <div className="cs_team_details cs_funfact">
            {service_data.map((item, i) => (
              <div key={i} className="cs_funfact_max_w">
                <div className="cs_funfact cs_style1">
                  <div className="cs_stroke_text me-4">
                    <span className="amin_auto_count d-flex"></span>
                  </div>
                  {/* <div className="cs_height_55 cs_height_lg_25"></div> */}
                  <div className="">
                    <Image src={item.image} alt="Award" className="mb-10" />

                    <h6>{item.title}</h6>
                    <p>{item.des}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container text-center">
        <div className="cs_height_100 cs_height_lg_50"></div>

        <div className="cs_back_to_services_btn">
          <Link
            href="/grandeur-coliving"
            className="cs_style_1 flex justify-center items-center gap-3"
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

export default OffersToLandlord;
