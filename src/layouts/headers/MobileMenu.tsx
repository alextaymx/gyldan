'use client';

import Link from 'next/link';

import { menuData } from '@/data/menu_data';
import { isLocal } from '@/data/constants';
const activeMenuData = isLocal ? menuData : menuData.filter((item) => !item.hidden);

const MobileMenu = ({ active, navTitle, openMobileMenu }: any) => {
  return (
    <>
      <ul className="cs_nav_list" style={{ display: active ? `block` : `none` }}>
        {activeMenuData.map((menu) => (
          <li
            key={menu.id}
            className={`${menu.has_dropdown ? `menu-item-has-children` : ``} ${
              navTitle === menu.title ? `active` : ``
            }`}
          >
            <Link href={menu.link}>{menu.title}</Link>
            {menu.has_dropdown && (
              <>
                <ul
                  className="cs_mega_wrapper"
                  style={{
                    display: navTitle === menu.title ? `block` : `none`,
                  }}
                >
                  {menu.sub_menu?.map((subMenu) => (
                    <li key={subMenu.id}>
                      <Link href={subMenu.link}>{subMenu.title}</Link>
                    </li>
                  ))}
                </ul>
                <span
                  onClick={() => openMobileMenu(menu.title)}
                  className={`cs_munu_dropdown_toggle ${navTitle === menu.title ? `active` : ``}`}
                ></span>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MobileMenu;
