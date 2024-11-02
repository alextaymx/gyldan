import React from 'react';

const stepContent = {
  stepData: [
    {
      id: `One`,
      title: `Initial Consultation`,
      description: `We start with an in-depth discussion to understand your property and goals, ensuring we offer a tailored homestay management solution.`,
    },
    {
      id: `Two`,
      title: `Customized Management Plan`,
      description: `Based on our consultation, we create a custom plan to meet your specific needs, assigning the right resources to maximize property value and guest satisfaction.`,
    },
    {
      id: `Three`,
      title: `Implementation & Ongoing Support`,
      description: `We manage all day-to-day operations, from guest handling to maintenance, providing seamless support to keep your property in top shape.`,
    },
    {
      id: `Four`,
      title: `Flexible Pricing Options`,
      description: `Our pricing is tailored to your property type and service needs, with flexible options for fixed fees, percentage-based, or commission-based structures.`,
    },
  ],
  title: `Our Approach`,
  description: `Grandeur Suites offers end-to-end homestay management services, covering everything from property maintenance to guest interactions. Our customized approach ensures that your property is well-maintained, while our expertise and technology simplify operations and boost your ROI.`,
};

const CorporateAdvisorySteps = () => {
  const service_data = stepContent.stepData;

  return (
    <>
      <div className="cs_height_150 cs_height_lg_50"></div>
      <section>
        <div className="container">
          <div className="cs_work cs_work_text">
            <h4 className="anim_heading_title">{stepContent.title}</h4>
            <p className="cs_mp0 anim_text">{stepContent.description}</p>
          </div>
          <div className="cs_height_80 cs_height_lg_40"></div>
          <div>
            <div className="cs_work cs_work_1">
              <div className="cs_card_work cs_style_1">
                {service_data.map((item, i) => (
                  <div key={i} className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide">
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
      </section>
    </>
  );
};

export default CorporateAdvisorySteps;
