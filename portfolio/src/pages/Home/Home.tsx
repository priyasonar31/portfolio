import React from "react";
import MenuBar from "../../atoms/MenuBar/MenuBar";
import { ProjectOutlined, HomeOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Icon from '@ant-design/icons';
import { ReactComponent as DevIcon } from "../../Assets/dev.svg";
import './Home.scss';

type MenuItem = Required<MenuProps>['items'][number];

const Home = (props: any) => {

const menuList: MenuItem[] = [
  {
    label: 'Home',
    key: 'home',
    icon: <HomeOutlined className="menu-icon" style={{ fontSize: 'large', fontWeight: 500 }}/>,
  },
  {
    label: 'About',
    key: 'about',
    icon: <UserOutlined className="menu-icon" style={{ fontSize: 'large', fontWeight: 500 }}/>,
  },
  {
    label: 'Projects',
    key: 'projects',
    icon: <ProjectOutlined className="menu-icon"style={{ fontSize: 'large', fontWeight: 500 }}/>,
  },
  {
    label: 'Contact Me',
    key: 'contact',
    icon: <PhoneOutlined className="menu-icon" style={{ fontSize: 'large', fontWeight: 500 }}/>,
  },
];

    return (<><nav><MenuBar menuList={menuList} /></nav>
    <section>
        <div>
        <div className="name-wrapper">
            Hey, I'm <span className="name-wrapper-name">Priya Sonar</span>
        </div>
        <div className="desc-text">a software developer from Mumbai</div>
        <div className="desc-subtext">trying to cause a positive impact through technology</div>
        </div>
        <Icon component={DevIcon}/>
    </section>

    </>)

};

export default Home;