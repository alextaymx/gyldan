import React from 'react';

interface DataType {
  subtitle: string;
  title: string;
  des: string;
  boxtitle: string;
  box_des_1: string;
  box_des_2: string;
  features: {
    id: number;
    title: string;
    des_1: string;
    des_2: string;
  }[];

  subtitle_2: string;
  title_2: string;
}

const feature_data: DataType = {
  subtitle: `Features`,
  title: `Elevating Your Property’s Potential with Gyldan's Strategic Property Solutions. `,
  des: `Welcome to Gyldan's Strategic Property Solutions! We specialize in providing comprehensive property management services to ensure your investments thrive. From residential and commercial property management to property acquisition and disposal, we offer the expertise and tools to maximize your property's potential and elevate your business.`,
  boxtitle: `Residential Property Management`,
  box_des_1: `Strategic Property Solutions`,
  box_des_2: `At Grandeur Coliving, our team specialize in comprehensive residential property management, ensuring seamless operations and exceptional tenant experiences. Our dedicated team handles everything from tenant screening to maintenance, maximizing your property's value and providing peace of mind both to you and to your tenants!`,
  features: [
    {
      id: 1,
      title: `Commercial Property Management`,
      des_1: `Expert property management`,
      des_2: `Gyldan Properties property management services focuses on optimizing the performance of your shoplots or commercial assets. We deliver tailored strategies to enhance occupancy, streamline operations, and maintain high standards, ensuring your commercial properties thrive in a competitive market.`,
    },
    {
      id: 2,
      title: `Hotel & Homestay Management Services`,
      des_1: `Seamless Guest Experiences`,
      des_2: `Grandeur Suites specializes in end-to-end management solutions for homestays and short-term
accommodations. From property maintenance to guest handling, we ensure your property is
meticulously cared for and your guests receive exceptional service. With well-curated listings,
regular upkeep, and professional concierge support, we take the hassle out of hosting while
maximizing your returns and elevating guest satisfaction.`,
    },
  ],
  // for home five
  subtitle_2: `Why Choose Us`,
  title_2: `Maximizing Your Property's Potential with Expert Management`,
};
const { subtitle, title, des, boxtitle, box_des_1, box_des_2, features, subtitle_2, title_2 } =
  feature_data;

const FeatureHomeTwo = ({ style_2 }: any) => {
  return (
    <>
      {style_2 ? null : <div className="cs_height_150 cs_height_lg_60"></div>}
      <section className={`cs_shape_wrap_3 ${style_2 ? `cs_gray_bg_20` : ``}`}>
        {style_2 ? <div className="cs_height_90 cs_height_lg_60"></div> : null}

        {style_2 ? null : (
          <div className="cs_shape_1">
            <svg
              width="138"
              height="118"
              viewBox="0 0 138 118"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.3">
                <path
                  opacity="0.3"
                  d="M61.0693 89.5549C72.1957 74.6168 102.936 49.6405 136.884 69.2405"
                  stroke="#101010"
                  strokeWidth="2"
                />
                <path
                  opacity="0.3"
                  d="M74.4465 54.818C82.4465 40.8181 107.447 3.31795 135.251 18.0685"
                  stroke="#101010"
                  strokeWidth="2"
                />
                <path
                  opacity="0.3"
                  d="M48.5117 82.305C55.8853 65.2002 62.1455 26.0906 28.1973 6.4906"
                  stroke="#101010"
                  strokeWidth="2"
                />
              </g>
            </svg>
          </div>
        )}

        <div className="container">
          <div className={`row ${style_2 ? `flex-column flex-lg-row align-items-center` : ``}`}>
            <div className="col-lg-7 col-12">
              <div className="cs_section_heading cs_style_1">
                <div className="cs_section_heading_text">
                  <div className="cs_section_subtitle anim_div_ShowZoom">
                    {style_2 ? subtitle_2 : subtitle}
                  </div>
                  <h2 className="cs_section_title anim_heading_title">
                    {style_2 ? title_2 : title}
                  </h2>
                </div>
              </div>
              {style_2 ? (
                <div className="cs_height_70 cs_height_lg_20"></div>
              ) : (
                <div className="cs_height_70"></div>
              )}

              <div className="flex-wrap gap-4 d-flex align-items-center flex-lg-nowrap justify-content-center">
                <div className="anim_text">
                  <p className="text-justify cs_font_16 cs_secend_section">{des}</p>
                  {/* <div className="cs_service_back_btn">
                    <a href="/" className="cs_style_1 cs_color_1">
                      <span className="cs_font_18">Learn More</span>
                      {` `}
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
                  </div> */}
                </div>
                <div className="cs_startup_agency cs_card cs_mr_left">
                  <h6>{boxtitle}</h6>
                  <div className="d-flex align-items-center">
                    <div className="cs_hr"></div>
                    <p className="cs_font_16 cs_normal cs_mp0 text-nowrap">{box_des_1}</p>
                    {/* <p className="cs_font_16 cs_normal cs_mp0">{box_des_1}</p> */}
                  </div>
                  <p className="text-justify cs_font_16 cs_mp0">{box_des_2}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div className="cs_startup_agency">
                {features.map((item, i) => (
                  <div key={i} className="cs_startup_agency cs_card">
                    <h6>{item.title}</h6>
                    <div className="d-flex align-items-center">
                      <div className="cs_hr"></div>
                      <p className="cs_font_16 cs_normal cs_mp0 text-nowrap">{item.des_1}</p>
                      {/* <p className="cs_font_16 cs_normal cs_mp0">{item.des_1}</p> */}
                    </div>
                    <p className="text-justify cs_font_16 cs_mp0">{item.des_2}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {style_2 ? null : (
          <div className="cs_shape_2">
            <svg
              width="149"
              height="149"
              viewBox="0 0 149 149"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.23">
                <path
                  d="M54.7532 1.16162C47.1932 42.2265 41.0646 48.3548 0 55.9147C41.065 63.4746 47.1932 69.6029 54.7532 110.668C62.3131 69.6029 68.4414 63.4746 109.506 55.9147C68.4414 48.3548 62.3128 42.2265 54.7532 1.16162Z"
                  fill="#454545"
                ></path>
                <path
                  d="M114.179 78.1968C109.372 104.312 105.474 108.21 79.3584 113.018C105.474 117.825 109.372 121.723 114.179 147.838C118.987 121.723 122.885 117.825 149 113.018C122.884 108.21 118.987 104.312 114.179 78.1968Z"
                  fill="#454545"
                ></path>
              </g>
            </svg>
          </div>
        )}
      </section>
    </>
  );
};

export default FeatureHomeTwo;
