import { StaticImageData } from 'next/image';

import blog_img_1 from '@/assets/img/post_1.jpg';
import blog_img_2 from '@/assets/img/post_2.jpg';
import blog_img_3 from '@/assets/img/post_3.jpg';
import blog_img_4 from '@/assets/img/post_4.jpg';
import blog_img_5 from '@/assets/img/post_5.jpg';
import blog_img_6 from '@/assets/img/post_6.jpg';
import blog_img_7 from '@/assets/img/post_7.jpg';
import blog_img_8 from '@/assets/img/post_8.jpg';
import blog_img_9 from '@/assets/img/post_9.jpg';

interface DataType {
  id: number;
  img: StaticImageData;
  title: string;
  des: string;
}

const blog_data: DataType[] = [
  {
    id: 1,
    img: blog_img_1,
    title: `Benefits of Comprehensive Corporate Advisory Services`,
    des: `Explore how comprehensive corporate advisory services can guide businesses through growth stages, from setup to compliance.`,
  },
  {
    id: 2,
    img: blog_img_2,
    title: `Enhancing Property Management: Strategies for Coliving Communities`,
    des: `Discover effective strategies for redefining property management and creating harmonious coliving communities.`,
  },
  {
    id: 3,
    img: blog_img_3,
    title: `Insights into Strategic Property Investments`,
    des: `Learn about the latest insights and strategies for optimizing property investments across different sectors.`,
  },
  {
    id: 4,
    img: blog_img_4,
    title: `Talent Recruitment Strategies for Organizational Success`,
    des: `Discover effective talent recruitment strategies that drive organizational success and growth across industries.`,
  },
  {
    id: 5,
    img: blog_img_5,
    title: `Elevating Venue Atmospheres with Live Performances`,
    des: `Explore how live performances can enhance venue atmospheres and create memorable experiences for patrons.`,
  },
  {
    id: 6,
    img: blog_img_6,
    title: `Harnessing Digital Transformation in Property Management`,
    des: `Learn how digital transformation is revolutionizing property management practices, improving efficiency and tenant satisfaction.`,
  },
  {
    id: 7,
    img: blog_img_7,
    title: `The Role of Technology in Corporate Advisory`,
    des: `Explore how technology is transforming corporate advisory services, enhancing efficiency and decision-making processes.`,
  },
  {
    id: 8,
    img: blog_img_8,
    title: `Sustainable Practices in Property Investments`,
    des: `Discover sustainable strategies and practices in property investments that benefit both investors and the environment.`,
  },
  {
    id: 9,
    img: blog_img_9,
    title: `Innovative Approaches to Talent Acquisition`,
    des: `Explore innovative approaches and trends in talent acquisition that are shaping the future of recruitment.`,
  },
];
export default blog_data;
