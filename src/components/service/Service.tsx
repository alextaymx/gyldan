import React from 'react';

interface DataType {
  id: string;
  title: string;
  description: string;
}
const service_data: DataType[] = [
  {
    id: `one`,
    title: `Consultation`,
    description: `We begin by understanding your property management needs and goals, offering in-depth consultations to tailor our services for your residential and commercial properties.`,
  },
  {
    id: `Two`,
    title: `Strategy`,
    description: `Our team develops a customized management plan, ensuring your properties are well-maintained, maximizing asset value, and providing tenant satisfaction.`,
  },
  {
    id: `Three`,
    title: `Implementation`,
    description: `We execute the management plan, handling everything from property maintenance and leasing to tenant communication, ensuring smooth operations.`,
  },
  {
    id: `Four`,
    title: `Support`,
    description: `We provide ongoing support and regular reviews, optimizing your property's performance while addressing any issues to ensure long-term profitability and stability.`,
  },
];
const Service = () => {
  return (
    <>
      <div className="cs_height_115 cs_height_lg_60"></div>
      <section>
        <div className="cs_primary_bg">
          <div className="cs_height_135 cs_height_lg_70"></div>
          <div className="container">
            <div className="cs_section_heading_hr cs_style_1 cs_color_1">
              <div className="cs_hr_design"></div>
              <div className="cs_section_heading cs_style_1 cs_color_1">
                <div className="cs_section_heading_text">
                  <h2 className="cs_section_title anim_heading_title">Our Working Process</h2>
                </div>
              </div>
              <div className="cs_hr_design"></div>
            </div>

            <div className="cs_height_100 cs_height_lg_70"></div>
            <div className="anim_div_ShowLeftSide">
              <div className="cs_work cs_work_1">
                <div className="cs_card_work cs_style_1 cs_color_1">
                  {service_data.map((item, i) => (
                    <div key={i} className="cs_card">
                      <div className="cs_card cs_style_1">
                        <div className="cs_posagation">
                          <div className="cs_work_style_1"></div>
                          <div className="cs_work_style_2"></div>
                        </div>
                        <div className="cs_stroke_number">
                          <span>{item.id}</span>
                        </div>
                      </div>

                      <h6 className="cs_work_title">{item.title}</h6>
                      <p className="cs_work_subtitle">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="cs_height_150 cs_height_lg_60"></div>
        </div>
      </section>
    </>
  );
};

export default Service;
