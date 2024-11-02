interface ServiceDataType {
  id: number;
  title: string;
  description: string;
  link?: string;
}

export const serviceData: ServiceDataType[] = [
  {
    id: 1,
    title: `Residential Property`,
    description: `Experience the comfort and convenience of our residential properties. We provide top-notch tenant management, ensuring a seamless living experience from room viewing to checking out. Join a community of good company and enjoy a variety of activities with your housemates.`,
    link: `/corporate-advisory`,
  },
  {
    id: 2,
    title: `Commercial Property`,
    description: `Transform your commercial property investments with Gyldan. Our expertise in property management focuses on creating thriving business environments, optimizing landlord investments, and providing exceptional spaces for commercial tenants.`,
  },
  {
    id: 3,
    title: `Property Acquisition & Disposal`,
    description: `Navigate the complexities of property acquisition and disposal with Gyldan Properties. Our strategic insights into property investments, management, and development help you maximize revenues and operational efficiency across various sectors.`,
  },
];

export default serviceData;
