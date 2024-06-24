import React from "react";

const stepContent = {
  stepData: [
    {
      id: "One",
      title: `Consultation & Assessment`,
      description: `We begin with a thorough assessment of your specific needs and goals to ensure a tailored approach.`,
    },
    {
      id: "Two",
      title: `Customized Strategy`,
      description: `Based on our assessment, we develop a strategic plan that assigns the right team members and resources to your project.`,
    },
    {
      id: "Three",
      title: `Implementation & Support`,
      description: `We execute the plan with precision and provide ongoing support, ensuring all services, including accounting, tax advisory, and business development, are optimized for your success.`,
    },
    {
      id: "Four",
      title: `Tailored Solutions & Fees`,
      description: `Our services are tailored to your unique scenario, with customized fees that reflect the specific needs and complexities of your business.`,
    },
  ],
  title: `Our Approch`,
  description: `GCA offers comprehensive corporate advisory services, including strategic consulting, seamless implementation, and ongoing support. Whether you're a startup or an established enterprise, our expertise covers business setup, accounting, taxation, compliance, and more. What sets us apart is our commitment to leveraging cutting-edge technology, ensuring our services are not only thorough but also globally accessible through digital platforms.`,
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
                  <div
                    key={i}
                    className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide"
                  >
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
