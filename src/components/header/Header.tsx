import {type FC, useState} from 'react';
import {Button, Col, Menu, type MenuProps, Popover, Row, Space} from "antd";

import {useLocation, useNavigate} from "react-router";
import MenuItem from './menu-item/MenuItem';
import './Header.scss'
import {SvgIcon} from "../icon/SvgIcon.tsx";

import greenBg from '../../assets/green-bg-logo.png'

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: <MenuItem label={'Home'} iconType={'menu-home'}/>,
        key: 'home',
    },
    {
        label: <MenuItem label={'About'} iconType={'menu-about'}/>,
        key: 'about',
    },
    {
        label: <MenuItem label={'Projects'} iconType={'menu-projects'}/>,
        key: 'projects',
    },
    {
        label: <MenuItem label={'Contact'} iconType={'menu-contacts'}/>,
        key: 'contact',
    },
]

const content = (
    <Space direction={'vertical'}>
        <Button type={'default'} block>{'Go to Ukrainian'}</Button>
        <Button type={'default'} block>{'Go to the Dark side'}</Button>
    </Space>
)

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

                <Row justify={'space-between'}>
                    <Col>
                        <Button type={'text'} className={'logo-btn'}>
                            <div className={'header-logo-bg'}>
                                <img src={greenBg} alt={"Green background"}/>
                            </div>
                            <SvgIcon type={'main-whale'} />
                        </Button>
                    </Col>

                    <Col>
                        <Row justify={'end'} align={'middle'} style={{ paddingTop: 24}}>
                            <Menu
                                className={'header-menu'}
                                onClick={onClick}
                                selectedKeys={[current]}
                                mode={"horizontal"}
                                items={items}
                                overflowedIndicator={false}
                            />
                            <Popover content={content} placement={'bottomRight'} arrow={false}>
                                <Button type={'text'}>
                                    <SvgIcon type={'burger'}/>
                                </Button>
                            </Popover>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Header;