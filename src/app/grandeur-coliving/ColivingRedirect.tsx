import Link from 'next/link';
import React from 'react';

type Props = {};

const items = [
  {
    title: "I'm a Landlord",
    href: '/grandeur-coliving/landlord',
  },
  {
    title: "I'm a Tenant",
    href: '/grandeur-coliving/tenant',
  },
];

function ColivingRedirect({}: Props) {
  return (
    <>
      <section>
        <div className="container">
          <div className="cs_learning_project">
            <div className="cs_section_heading cs_style_1">
              <div className="cs_section_heading_text">
                <h3 className="cs_section_title_3 anim_heading_title">
                  Learn more about our coliving services
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-40 coliving-redirect">
                {items.map((item) => {
                  return (
                    <div
                      key={item.href}
                      className="cs_section_heading_right cs_btn_anim hover:scale-110 transition-transform duration-1000"
                    >
                      <Link href={item.href} className="cs_btn cs_style_1">
                        <span>{item.title}</span>
                        <svg
                          width="19"
                          height="13"
                          viewBox="0 0 19 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038
                    11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                            fill="currentColor"
                          />
                        </svg>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ColivingRedirect;
