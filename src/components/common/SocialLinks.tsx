import Link from 'next/link';
import React from 'react';

import { socialLinks } from '@/data/constants';

// hero social links home three
interface HDataType {
  id: number;
  link: string;
  title: string;
}
const hero_link_home_three: HDataType[] = socialLinks;
export const SocialLinks = () => {
  return (
    <>
      {hero_link_home_three.map((h_item, h_index) => (
        <Link key={h_index} href={h_item.link} className="cs_center" target="_blank">
          {h_item.title}
        </Link>
      ))}
    </>
  );
};

// copy right text
type copy_right_text_type = {
  copy_right: React.JSX.Element;
};

const copy_right_text: copy_right_text_type = {
  copy_right: <>Copyright {new Date().getFullYear()}, Made with ❤️ by Alex</>,
};

const { copy_right } = copy_right_text;
export const CopyRight = () => {
  return <> {copy_right}</>;
};
