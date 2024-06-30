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
  hidden?: boolean;
}

export const menuData: MenuDataType[] = [
  {
    id: 1,
    title: `About`,
    link: `/about`,
    has_dropdown: false,
  },
  {
    id: 2,
    title: `Corporate Advisory`,
    link: `/corporate-advisory`,
    has_dropdown: false,
  },
  {
    id: 3,
    title: `Grandeur Coliving`,
    link: `/grandeur-coliving`,
    has_dropdown: true,
    sub_menu: [
      {
        id: 1,
        title: `I'm a Landlord`,
        link: `/grandeur-coliving/landlord`,
      },
      {
        id: 2,
        title: `I'm a Tenant`,
        link: `/grandeur-coliving/tenant`,
      },
    ],
  },
  {
    id: 4,
    title: `Properties`,
    link: `/properties`,
    has_dropdown: false,
  },
  {
    id: 5,
    title: `Dazz Talent`,
    link: `/dazz-talent`,
    has_dropdown: false,
  },
  {
    id: 6,
    title: `Recruitment`,
    link: `/recruitment`,
    has_dropdown: false,
  },
  {
    id: 7,
    title: `Contact`,
    link: `/contact`,
    has_dropdown: false,
  },
  {
    id: 8,
    title: `Pages`,
    link: `/about`,
    has_dropdown: true,
    hidden: true,
    sub_menu: [
      {
        id: 1,
        title: `About`,
        link: `/about`,
      },
      {
        id: 2,
        title: `Team`,
        link: `/team`,
      },
      {
        id: 3,
        title: `Team Details`,
        link: `/team-details`,
      },
      {
        id: 4,
        title: `Contact`,
        link: `/contact`,
      },
      {
        id: 5,
        title: `Faq`,
        link: `/faq`,
      },
      {
        id: 6,
        title: `Error`,
        link: `/error`,
      },

      {
        id: 7,
        title: `Portfolio`,
        link: `/portfolio`,
      },
      {
        id: 8,
        title: `Portfolio Details`,
        link: `/portfolio-details`,
      },
      {
        id: 9,
        title: 'Blog',
        link: '/blog',
      },
      {
        id: 10,
        title: 'Blog Details',
        link: '/blog-details',
      },
      {
        id: 11,
        title: `Digital Agency`,
        link: `/`,
      },
      {
        id: 12,
        title: `Startup Agency`,
        link: `/startup-agency`,
      },
      {
        id: 13,
        title: `Design Studio`,
        link: `/design-studio`,
      },
      {
        id: 14,
        title: `Creative Protfolio`,
        link: `/creative-protfolio`,
      },
      {
        id: 15,
        title: `Marketing Agency`,
        link: `/marketing-agency`,
      },
    ],
  },
];
