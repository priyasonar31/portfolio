import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import './MenuBar.scss';

const MenuBar = (props: any) => {
  const [current, setCurrent] = useState('mail');
  const { menuList } = props;
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu className='menu-bar' onClick={onClick} mode="horizontal" items={menuList} theme='dark' />;
};

export default MenuBar;