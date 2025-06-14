import {type FC, useState} from 'react';
import {Menu, type MenuProps} from "antd";

import './Header.scss'
import {MailOutlined} from "@ant-design/icons";

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: 'Home',
        key: 'home',
        icon: <MailOutlined/>,
    },
    {
        label: 'About',
        key: 'about',
        icon: <MailOutlined/>,
    },
    {
        label: 'Projects',
        key: 'projects',
        icon: <MailOutlined/>,
    },
    {
        label: 'Contact',
        key: 'contact',
        icon: <MailOutlined/>,
    },
]


const Header: FC = () => {

    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };

    return (
        <div className={'header-wrapper'}>
            <div className={'container'}>
                <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode={"horizontal"}
                    items={items}/>
            </div>
        </div>
    );
};

export default Header;