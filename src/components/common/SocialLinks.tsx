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
  copy_left: React.JSX.Element;
  copy_right: React.JSX.Element;
};

const copy_right_text: copy_right_text_type = {
  copy_left: (
    <>
      GYLDAN HOLDINGS SDN. BHD. - SSM No.: 202101032671 (1432971-M). All rights reserved ©{' '}
      {new Date().getFullYear()}
    </>
  ),
  copy_right: <>Made with ❤️ and dedication - AT</>,
};

const { copy_left, copy_right } = copy_right_text;
export const CopyRight = () => {
  return (
    <div className="flex flex-col justify-between gap-5 cs_calibri_font xl:flex-row">
      <div className=" font-extralight">{copy_left}</div>
      <div>{copy_right}</div>
    </div>
  );
};
