interface ServiceDataType {
  id: number;
  title: string;
  des: string;
}

export const serviceData: ServiceDataType[] = [
  {
    id: 1,
    title: `Corporate Advisory`,
    des: `At Gyldan Corporate Advisory, we guide businesses through strategic consulting, implementation, and ongoing support. Our services include business setup, accounting, taxation, and compliance.`,
  },
  {
    id: 2,
    title: `Property Management`,
    des: `Gyldan specializes in redefining property management with a focus on creating harmonious coliving communities, optimizing investments for landlords, and providing exceptional living spaces for tenants.`,
  },
  {
    id: 3,
    title: `Property Investments`,
    des: `Gyldan Properties offers strategic insights into property investments, management, and development across diverse sectors, aiming to optimize revenues and operational efficiency.`,
  },
  {
    id: 4,
    title: `Live Performances`,
    des: `Dazz Talent specializes in providing exceptional live performers for cafes and bars, enhancing venue atmospheres with unforgettable musical experiences.`,
  },
  {
    id: 5,
    title: `Talent Recruitment`,
    des: `Gyldan Recruitment connects businesses with top-tier professionals across industries, ensuring strategic placements that drive organizational success and growth.`,
  },
];

export default serviceData;
