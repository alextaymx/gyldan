export const ENVIRONMENT = process.env.NODE_ENV;
export const isLocal = ENVIRONMENT === "development";
export const isProduction = ENVIRONMENT === "production";
export const businessInfo = {
  email: "info@gyldan.com.my",
  phone: "+603-9547 7151",
  whatsapp: "+6017-988 1525",
  whatsappLink: "https://wa.me/60179881525/",
  address: "Kuala Lumpur, Malaysia",
};

export const socialLinks = [
  {
    id: 1,
    link: "https://www.facebook.com/gyldanmy",
    title: "Facebook",
  },
  {
    id: 2,
    link: "https://www.linkedin.com/company/gyldanmy/",
    title: "Linkedin",
  },
  {
    id: 3,
    link: "https://www.instagram.com/gyldan.my/",
    title: "Instagram",
  },
];

interface MenuDataType {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menu?: {
    id: number;
    title: string;
    link: string;
  }[];
}
export const menuData: MenuDataType[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: true,
    sub_menu: [
      {
        id: 1,
        title: "Digital Agency",
        link: "/",
      },
      {
        id: 2,
        title: "Startup Agency",
        link: "/startup-agency",
      },
      {
        id: 3,
        title: "Design Studio",
        link: "/design-studio",
      },
      {
        id: 4,
        title: "Creative Protfolio",
        link: "/creative-protfolio",
      },
      {
        id: 5,
        title: "Marketing Agency",
        link: "/marketing-agency",
      },
    ],
  },
  {
    id: 2,
    title: "About",
    link: "/about",
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Pages",
    link: "/about",
    has_dropdown: true,
    sub_menu: [
      {
        id: 1,
        title: "About",
        link: "/about",
      },
      {
        id: 2,
        title: "Team",
        link: "/team",
      },
      {
        id: 3,
        title: "Team Details",
        link: "/team-details",
      },
      {
        id: 4,
        title: "Contact",
        link: "/contact",
      },
      {
        id: 5,
        title: "Faq",
        link: "/faq",
      },
      {
        id: 6,
        title: "Error",
        link: "/error",
      },
    ],
  },
  {
    id: 4,
    title: "Services",
    link: "/service",
    has_dropdown: true,
    sub_menu: [
      {
        id: 1,
        title: "Services",
        link: "/service",
      },
      {
        id: 2,
        title: "Services Details",
        link: "/service-details",
      },
    ],
  },
  {
    id: 5,
    title: "Portfolio",
    link: "/portfolio",
    has_dropdown: true,
    sub_menu: [
      {
        id: 1,
        title: "Portfolio",
        link: "/portfolio",
      },
      {
        id: 2,
        title: "Portfolio Details",
        link: "/portfolio-details",
      },
    ],
  },
  {
    id: 6,
    title: "Blog",
    link: "/blog",
    has_dropdown: true,
    sub_menu: [
      {
        id: 1,
        title: "Blog",
        link: "/blog",
      },
      {
        id: 2,
        title: "Blog Details",
        link: "/blog-details",
      },
    ],
  },
  {
    id: 7,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
  },
];
const constants = {
  ENVIRONMENT,
  isLocal,
  isProduction,
  businessInfo,
  socialLinks,
  menuData,
};

export default constants;
