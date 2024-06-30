'use client';

import React, { useState } from 'react';

interface DataType {
  faq_data: {
    id: string;
    question: string;
    answer: string;
  }[];
  title: string;
  description: string;
  features: string[];
}
const service_faq_content: DataType = {
  faq_data: [
    {
      id: `One`,
      question: `Company Formation & Secretarial Services`,
      answer: `In the face of increasingly intricate regulatory demands and rapid technological advancements, your organization must navigate regulatory obligations efficiently while remaining agile to seize growth opportunities. Our team is dedicated to managing your corporate secretarial matters in a cost-effective and risk-mitigated manner tailored to your specific business model. Streamlining the incorporation process, we make establishing your company seamless and stress-free. With our esteemed partners, we extend support to both local and international business owners, facilitating the legal establishment and operation of companies in Malaysia and Singapore. We offer a comprehensive range of support and advisory services to ensure ongoing compliance with relevant legislative and statutory requirements.`,
    },
    {
      id: `Two`,
      question: `Accounting`,
      answer: `We take pride in delivering professional accounting services that enable individuals and businesses to efficiently manage their financial records. Our dedicated team of experienced accountants ensures the provision of precise and dependable financial information, guaranteeing compliance with all relevant regulations and standards. Whether you require support with bookkeeping, tax preparation, or financial analysis, our expertise is tailored to meet your specific needs. Our comprehensive accounting solutions allow you to concentrate on business growth while we handle the intricacies of financial management. Count on us to manage your financial affairs with utmost confidentiality and integrity. Our objective is to empower you with the knowledge and insights essential for making well-informed financial decisions. Connect with us today to explore how we can seamlessly address your accounting requirements.`,
    },
    {
      id: `Three`,
      question: `Tax Advisory`,
      answer: `Our tax advisory services are crafted to guide individuals and businesses through the intricacies of tax laws and regulations. Delivering personalized counsel and strategic insights, we aim to help clients minimize tax liabilities and optimize financial opportunities. Our seasoned team of tax professionals remains abreast of the latest legislative changes, employing their expertise to tailor solutions to individual tax situations. Whether it's tax planning, compliance, or resolution of tax disputes, our adept advisors are ready to assist. Recognizing the challenges taxes pose, our comprehensive tax advisory service ensures that your tax matters are managed with precision and efficiency, providing confidence in every aspect of the process.`,
    },
    {
      id: `Four`,
      question: `Business Development`,
      answer: `Our services in business development center on diverse facets of organizational enhancement and effectiveness. We excel in aiding businesses to establish a robust organizational framework that fosters efficient communication and collaboration. Our support extends to the creation of well-defined departments and committees, aligning roles and responsibilities with overarching business objectives. Moreover, we provide guidance in crafting Standard Operating Procedures (SOPs) to streamline processes and elevate productivity. Leveraging our expertise in these realms, we empower businesses to optimize operations and attain sustainable growth.`,
    },
    {
      id: `Five`,
      question: `HR & Payroll Management`,
      answer: `We provide tailored HR and payroll management solutions designed to meet the distinct requirements of our clients. Backed by a proficient team, we ensure the efficient and precise handling of all HR and payroll aspects. From seamless employee onboarding and benefits administration to meticulous payroll processing and tax compliance, our services span the entire spectrum. Leveraging cutting-edge technology, our state-of-the-art systems facilitate seamless integration and automation, reducing both time investment and errors. Recognizing the significance of confidentiality and security in managing sensitive employee data, we enforce stringent protocols. With our HR and payroll management services, businesses can streamline their focus on core operations, confident that their HR and payroll needs are expertly handled.`,
    },
    {
      id: `Six`,
      question: `Virtual Administration`,
      answer: `Our team of proficient experts is committed to remotely supporting businesses in their administrative functions. Whether it's overseeing emails, coordinating appointments, organizing files, managing data entry, or conducting research, we offer comprehensive assistance for all administrative requirements. Through our virtual administration services, clients can optimize their time and resources by outsourcing these tasks to our efficient team. We prioritize confidentiality, accuracy, and prompt service delivery, enabling businesses to concentrate on core operations while entrusting administrative responsibilities to us. Count on us to enhance efficiency, streamline administrative processes, and elevate overall productivity.`,
    },
    {
      id: `Seven`,
      question: `IT Management & Other Business Systems Integration`,
      answer: `We present a comprehensive array of IT services tailored to fulfill your business requirements. Our team of young, creative and vibrant professionals specializes in crafting visually appealing and functional websites to enhance your online presence. We provide meticulous software maintenance services, ensuring your applications remain up-to-date and operate seamlessly. Proficient in infrastructure and networking, our team guarantees the security and efficiency of your IT systems. Additionally, we offer business systems integration to streamline operations and enhance overall productivity. With our IT services, entrust your technological needs to us, allowing you to concentrate on core business activities.`,
    },
  ],
  title: `Services Offered`,
  description: `At GCA, we provide end-to-end corporate advisory services, encompassing
    strategic consulting, seamless implementation, and ongoing support.
    Whether you're a startup or an established enterprise, our offerings span
    business setup, accounting, taxation, annual compliance, and beyond. What
    distinguishes us is our dedication to leveraging cutting-edge technology,
    ensuring our services are not only comprehensive but also accessible
    globally through digital platforms.`,
  features: [
    `Company Formation & Secretarial Services`,
    `Accounting`,
    `Tax Advisory`,
    `Business Development`,
    `HR & Payroll Management`,
    `Virtual Administration`,
    `IT Management & Other Business Systems Integration`,
  ],
};

const { faq_data, title, description, features } = service_faq_content;

const CorporateAdvisoryServices = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <div className="container">
        <div className="cs_service_details cs_type_2">
          <div className="cs_service_details_img">
            <div className="cs_accordeon">
              {faq_data.map((item, i) => (
                <div
                  key={i}
                  onClick={() => toggleAccordion(i)}
                  className={`cs_accordion_item ${i === activeIndex ? `active cs_icon` : ``}`}
                >
                  <div className="cs_accordion_header">
                    <p className="cs_accordion_title cs_m0" id={`heading${item.id}`}>
                      {item.question}
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 25"
                      width="30"
                      style={{
                        transform: i === activeIndex ? `rotate(-90deg)` : `none`,
                      }}
                    >
                      <path
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right"
                      />
                    </svg>
                  </div>

                  <div className={`cs_accordion_body ${i === activeIndex ? `` : `d-none`}`}>
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cs_service_details_text">
            <div className="cs_specialization cs_section_heading cs_style_1">
              <div className="cs_section_heading_text">
                <h4 className="cs_section_title_4">{title}</h4>
              </div>
              <p>{description} </p>
              <div>
                <ul>
                  {features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="cs_back_to_services_btn">
              <a href="/" className="cs_style_1">
                <span>Back To Home Page</span>
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CorporateAdvisoryServices;
