import {type FC, useState} from 'react';
import {Col, Menu, type MenuProps, Row } from "antd";

import {useLocation, useNavigate} from "react-router";
import MenuItem from './menu-item/MenuItem';
import './Header.scss'
import {SvgIcon} from "../icon/SvgIcon.tsx";



type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: <MenuItem label={'Home'}/>,
        key: 'home',
    },
    {
        label: <MenuItem label={'About'}/>,
        key: 'about',
    },
    {
        label: <MenuItem label={'Projects'}/>,
        key: 'projects',
    },
    {
        label: <MenuItem label={'Contact'}/>,
        key: 'contact',
    },
]

const Header: FC = () => {

    const navigate = useNavigate()
    const {pathname} = useLocation()
    const currentLocation = pathname.split('/')[1]

    const [current, setCurrent] = useState(currentLocation);

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
        navigate(`/${e.key}`)
    };

    return (
        <div className={'header-wrapper'}>
            <div className={'container'}>
                <Row justify={'space-between'} align={'middle'}>
                    <Col>
                        <h3>{'WHALE LOGO'}</h3>
                        <SvgIcon type={'main-whale'} />
                    </Col>
                    <Col span={18}>
                        <Menu
                            className={'header-menu'}
                            onClick={onClick}
                            selectedKeys={[current]}
                            mode={"horizontal"}
                            items={items}
                            overflowedIndicator={false}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Header;