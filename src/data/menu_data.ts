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
    id: 2,
    title: `About`,
    link: `/about`,
    has_dropdown: false,
  },
  {
    id: 6,
    title: `Corporate Advisory`,
    link: `/corporate-advisory`,
    has_dropdown: false,
  },
  {
    id: 4,
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
    id: 1,
    title: `Home`,
    link: `/`,
    has_dropdown: true,
    sub_menu: [
      {
        id: 1,
        title: `Digital Agency`,
        link: `/`,
      },
      {
        id: 2,
        title: `Startup Agency`,
        link: `/startup-agency`,
      },
      {
        id: 3,
        title: `Design Studio`,
        link: `/design-studio`,
      },
      {
        id: 4,
        title: `Creative Protfolio`,
        link: `/creative-protfolio`,
      },
      {
        id: 5,
        title: `Marketing Agency`,
        link: `/marketing-agency`,
      },
    ],
  },

  {
    id: 3,
    title: `Pages`,
    link: `/about`,
    has_dropdown: true,
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
    ],
  },

  {
    id: 5,
    title: `Portfolio`,
    link: `/portfolio`,
    has_dropdown: true,
    sub_menu: [
      {
        id: 1,
        title: `Portfolio`,
        link: `/portfolio`,
      },
      {
        id: 2,
        title: `Portfolio Details`,
        link: `/portfolio-details`,
      },
    ],
  },

  //   {
  //     id: 6,
  //     title: "Blog",
  //     link: "/blog",
  //     has_dropdown: true,
  //     sub_menu: [
  //       {
  //         id: 1,
  //         title: "Blog",
  //         link: "/blog",
  //       },
  //       {
  //         id: 2,
  //         title: "Blog Details",
  //         link: "/blog-details",
  //       },
  //     ],
  //   },
  {
    id: 7,
    title: `Contact`,
    link: `/contact`,
    has_dropdown: false,
  },
];
