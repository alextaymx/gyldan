import { menuData } from './menu_data';

export const ENVIRONMENT = process.env.NODE_ENV;
export const isLocal = ENVIRONMENT === `development`;
export const isProduction = true || ENVIRONMENT === `production`;

export const businessInfo = {
  email: `info@gyldan.com.my`,
  phone: `+603-9547 7151`,
  whatsapp: `+6017-988 1525`,
  whatsappLink: `https://wa.me/60179881525/`,
  address: `Kuala Lumpur, Malaysia`,
};

export const aboutSlider: AboutDataType[] = [
  {
    img: `/assets/img/about_img.jpg`,
    sub_title: `Introducing: Grandeur Suites - Hotel & Homestay Management Service`,
    title: `Convert to Short-term Accommodation`,
    des: `Transform your investment property into a profitable short-term accommodation with Grandeur Suites. We offer comprehensive management services, from consulting and strategy development to implementation and support, ensuring your property thrives in the short-term rental market.`,
  },
  {
    img: `/assets/img/about_img.jpg`,
    sub_title: `Introducing: Grandeur Suites - Hotel & Homestay Management Service`,
    title: `Attractive Income Models`,
    des: `Discover attractive income models with Grandeur Suites. We curate the ideal living spaces that provide lucrative investments for landlords and a true home away from home for tenants, redefining property management with a focus on community and exceptional experiences.`,
  },
  {
    img: `/assets/img/about_img.jpg`,
    sub_title: `Introducing: Grandeur Suites - Hotel & Homestay Management Service`,
    title: `Owner Benefits All year-round`,
    des: `Enjoy year-round benefits as a property owner with Grandeur Suites. Our expert team provides strategic property management, enhancing capabilities, optimizing revenues, and minimizing operational costs to ensure your property investment yields maximum returns.`,
  },
];

export const companySlider: CompanyDataType[] = [
  {
    img: `/assets/img/hero_img_1.jpg`,
    sub_title: ``,
    title: `Your Property, Our Priority.`,
    des: `Empowering success through expert property management solutions for residential and commercial properties, ensuring seamless operations and asset growth.`,
    link: `/service`,
  },
  {
    img: `/assets/img/hero_img_1.jpg`,
    sub_title: `GYLDAN CORPORATE ADVISORY`,
    title: `Corporate Advisory`,
    des: `Comprehensive services for startups and enterprises: business setup, accounting, taxation, compliance, and more.`,
    link: `/corporate-advisory`,
  },
  {
    img: `/assets/img/hero_img_1.jpg`,
    sub_title: `GRANDEUR COLIVING`,
    title: `Property Management`,
    des: `Creating harmonious coliving communities for landlords and tenants.`,
  },
  {
    img: `/assets/img/hero_img_1.jpg`,
    sub_title: `GYLDAN PROPERTIES`,
    title: `Property Investments`,
    des: `Strategic insights into property investments, management, and development across sectors.`,
  },
  {
    img: `/assets/img/hero_img_1.jpg`,
    sub_title: `DAZZ TALENT`,
    title: `Live Performances`,
    des: `Exceptional singers and live performers for cafes and bars, enhancing venue atmospheres.`,
  },
  {
    img: `/assets/img/hero_img_1.jpg`,
    sub_title: `GYLDAN RECRUITMENT`,
    title: `Talent Recruitment`,
    des: `Connecting businesses with top-tier professionals across industries for organizational success.`,
  },
];

export const socialLinks = [
  {
    id: 1,
    link: `https://www.facebook.com/gyldanmy`,
    title: `Facebook`,
  },
  {
    id: 2,
    link: `https://www.linkedin.com/company/gyldanmy/`,
    title: `Linkedin`,
  },
  {
    id: 3,
    link: `https://www.instagram.com/gyldan.my/`,
    title: `Instagram`,
  },
];

interface AboutDataType {
  img: string;
  sub_title: string;
  title: string;
  des: string;
}

interface CompanyDataType {
  img: string;
  sub_title: string;
  title: string;
  des: string;
  link?: string;
}

const constants = {
  ENVIRONMENT,
  isLocal,
  isProduction,
  businessInfo,
  socialLinks,
  menuData,
  aboutSlider,
  companySlider,
};

export default constants;
