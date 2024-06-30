import { menuData } from './menu_data';

export const ENVIRONMENT = process.env.NODE_ENV;
export const isLocal = ENVIRONMENT === `test`;
export const isProduction = ENVIRONMENT === `production`;

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
    sub_title: `GYLDAN CORPORATE ADVISORY`,
    title: `Comprehensive Corporate Advisory Services`,
    des: `From consulting and strategy development to implementation and support, our comprehensive services can help your business thrive.
  
      At GCA, we provide end-to-end corporate advisory services, encompassing strategic consulting, seamless implementation, and ongoing support. Whether you're a startup or an established enterprise, our offerings span business setup, accounting, taxation, annual compliance, and beyond. What distinguishes us is our dedication to leveraging cutting-edge technology, ensuring our services are not only comprehensive but also accessible globally through digital platforms.`,
  },
  {
    img: `/assets/img/about_img.jpg`,
    sub_title: `GRANDEUR COLIVING`,
    title: `Redesigning Property Management: Grandeur Coliving`,
    des: `Welcome to Grandeur Coliving, where both landlords and tenants find their perfect match. Our mission is to curate the ideal living space – a lucrative investment for landlords and a true home away from home for tenants. With a focus on redefining property management, we specialize in fostering a harmonious coliving community, ensuring an exceptional experience for all.`,
  },
  {
    img: `/assets/img/about_img.jpg`,
    sub_title: `GYLDAN PROPERTIES`,
    title: `Strategic Property Solutions with Gyldan Properties`,
    des: `Gyldan Properties, your premier Property Consultants, is a dynamic startup armed with profound insights into property investments, management, and development. With the ability to steer existing teams, enhance capabilities, and implement strategic measures, we optimize your bottom line by boosting revenues and minimizing operational costs across public and private sectors. Offering a singular point of solution tailored to meet precise property business needs, we are your dedicated partner for strategic property management.`,
  },
  {
    img: `/assets/img/about_img.jpg`,
    sub_title: `DAZZ TALENT`,
    title: `Elevating Venues with Dazz Talent`,
    des: `Dazz Talent specializes in providing exceptional live performers for cafes and bars, enhancing venue atmospheres with unforgettable musical experiences.`,
  },
  {
    img: `/assets/img/about_img.jpg`,
    sub_title: `GYLDAN RECRUITMENT`,
    title: `Connecting Talent for Organizational Success`,
    des: `Gyldan Recruitment is your partner in connecting businesses with top-tier professionals across various industries, ensuring strategic placements that drive organizational growth.`,
  },
];

export const companySlider: CompanyDataType[] = [
  {
    img: `/assets/img/hero_img_1.jpg`,
    sub_title: `Gyldan Group`,
    title: `Your Success. Our Expertise.`,
    des: `Empowering success through expert business outsourcing, property management, talent discovery, and financial advisory solutions.`,
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
