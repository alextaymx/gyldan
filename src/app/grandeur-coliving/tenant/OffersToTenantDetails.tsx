import Image from 'next/image';
import React from 'react';

interface DataType {
  features: {
    id: number;
    title: string;
    description: string;
  }[];
}

const tenantDetails: DataType = {
  features: [
    {
      id: 1,
      title: 'Comfortable and Fully Furnished Living Spaces',
      description: `Enjoy a hassle-free stay in well-maintained 
units with modern furnishings and amenities designed to make you feel at home.`,
    },
    {
      id: 2,
      title: 'Inclusive Utilities',
      description: `Benefit from all-inclusive rental rates covering utilities, such as water, 
electricity (up to a certain limit), and high-speed internet, ensuring that you don't have to 
worry about extra bills.`,
    },
    {
      id: 3,
      title: 'Community-Focused Environment',
      description: `Experience a vibrant, supportive community of like-minded individuals with shared 
spaces that encourage social interaction and a sense of belonging.`,
    },
    {
      id: 4,
      title: 'Professional Property Management',
      description: `Rely on our dedicated property management team to address maintenance needs, 
resolve issues promptly, and ensure that your living experience is smooth and enjoyable.`,
    },
    {
      id: 5,
      title: 'Convenient Location',
      description: `Depending on the property, expect easy access to transportation, nearby shopping, 
dining, and entertainment options, perfect for students, professionals, and expats alike.`,
    },
  ],
};

function OffersToTenantDetails() {
  return (
    <div className="row align-items-center">
      <div className="mb-4 col-lg-6 col-md-6 mb-md-0">
        <div className="cs_team_details_img">
          <Image
            src="/assets/img/coliving/tenant/housemate-chatting.jpg"
            alt="Tenant Offers"
            width={700}
            height={600}
            className="rounded img-fluid"
          />
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div className="cs_team_details_text">
          {/* <h3 className="mb-4 cs_section_title">{tenantDetails.title}</h3> */}
          <p className="mb-4 text-3xl">
            As a tenant at <span className="cs_medium">Grandeur Coliving</span>, you can expect:{' '}
          </p>

          <div className="cs_height_30"></div>
          <ol className="text-justify list-decimal">
            {tenantDetails.features.map((feature) => (
              <li key={feature.id} className="mb-4">
                <span className="mb-2 cs_medium cs_primary_color">{feature.title}: </span>
                <span>{feature.description}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default OffersToTenantDetails;
