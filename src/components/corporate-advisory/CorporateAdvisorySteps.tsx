import React from "react";

const stepContent = {
  stepData: [
    {
      id: "One",
      title: `Company Formation & Secretarial Services`,
      description: `Navigate regulatory demands efficiently and establish your company seamlessly with our corporate secretarial services in Malaysia and Singapore.`,
    },
    {
      id: "Two",
      title: `Accounting`,
      description: `Professional accounting services tailored to meet your financial management needs, from bookkeeping to tax preparation and financial analysis.`,
    },
    {
      id: "Three",
      title: `Tax Advisory`,
      description: `Guiding individuals and businesses through tax laws and regulations to minimize liabilities and optimize financial opportunities.`,
    },
    {
      id: "Four",
      title: `Business Development`,
      description: `Enhance organizational effectiveness with our business development services, including framework establishment and SOPs.`,
    },
    {
      id: "Five",
      title: `HR & Payroll Management`,
      description: `Efficient and precise HR and payroll management solutions, ensuring compliance and confidentiality for your business.`,
    },
    {
      id: "Six",
      title: `Virtual Administration`,
      description: `Comprehensive remote administrative support, optimizing efficiency and productivity.`,
    },
    {
      id: "Seven",
      title: `IT Management & Other Business Systems Integration`,
      description: `Tailored IT services for enhanced online presence and operational efficiency, including software maintenance and business systems integration.`,
    },
  ],
  title: `Specialization`,
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
