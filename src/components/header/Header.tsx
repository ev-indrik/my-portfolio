import {type FC, useEffect, useState} from 'react';
import {Button, Col, Divider, Menu, type MenuProps, Popover, Row} from "antd";

import {useLocation, useNavigate} from "react-router";
import MenuItem from './menu-item/MenuItem';
import {SvgIcon} from "../icon/SvgIcon.tsx";

import greenBg from '../../assets/green-bg-logo.png'
import popoverBgImg from './images/popover-bg-img.png'

import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import './Header.scss'
import WebsiteButton from "@/components/website-button/WebsiteButton";
import BurgerIcon from "@/components/animated-burger-icon/BurgerIcon";

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
        label: <MenuItem label={'Contacts'} iconType={'menu-contacts'}/>,
        key: 'contacts',
    },
]

// ===>> popup for Dark&Light modes, eng&ua
// const switchContent = (
//     <Space direction={'vertical'}>
//         <Button type={'default'} block>{'Go to Ukrainian'}</Button>
//         <Button type={'default'} block>{'Go to the Dark side'}</Button>
//     </Space>
// )


const Header: FC = () => {

    const {xxl, xl, lg} = useBreakpoint()

    const [isPopoverOpen, setIsPopoverOpen] = useState(false)

    const navigate = useNavigate()
    const {pathname} = useLocation()
    const currentLocation = pathname.split('/')[1]

    const [current, setCurrent] = useState(currentLocation);

    useEffect(() => {

        setCurrent(currentLocation)

        if (!currentLocation) {
            setCurrent('home')
        }

    }, [currentLocation])

    useEffect(() => {
        if (isPopoverOpen) {
            document.body.classList.add('no-scroll')
        } else {
            const timeout = setTimeout(() => {
                document.body.classList.remove('no-scroll')
            }, 300)
            return () => clearTimeout(timeout)
        }
    }, [isPopoverOpen])


    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
        navigate(`/${e.key}`)
    };

    const onLogoClick = () => {
        navigate('/home')
    }

    const onOpenChange = (isOpen: boolean) => {
        setIsPopoverOpen(isOpen)
    }

    const menuContent = (
        <div className={'popup-wrapper'}>

            <div className={'popover-bg-wrapper'}>
                <img src={popoverBgImg} alt={"illustration for background"}/>
            </div>
                <Menu
                    className={'header-menu'}
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode={"vertical"}
                    items={items}
                    overflowedIndicator={false}
                />

            <Divider />
        </div>
    )

    return (
        <div className={'header-wrapper'}>
            <div className={'container'}>

                {(xxl || xl || lg) ? (

                        <Row justify={'space-between'}>
                            <Col>
                                <Button type={'text'} className={'logo-btn'} onClick={onLogoClick}>
                                    <SvgIcon type={'main-whale'}/>
                                </Button>
                                <div className={'header-logo-bg'}>
                                    <img src={greenBg} alt={"Green background"}/>
                                </div>
                            </Col>

                            <Col>
                                <Row justify={'end'} align={'middle'} style={{paddingTop: 24}}>
                                    <Menu
                                        className={'header-menu'}
                                        onClick={onClick}
                                        selectedKeys={[current]}
                                        mode={"horizontal"}
                                        items={items}
                                        overflowedIndicator={false}
                                    />
                                    {/*===>> popup for Dark&Light modes, eng&ua*/}
                                    {/*<Popover content={switchContent} placement={'bottomRight'} arrow={false}>*/}
                                    {/*    <Button type={'text'}>*/}
                                    {/*        <SvgIcon type={'burger'}/>*/}
                                    {/*    </Button>*/}
                                    {/*</Popover>*/}
                                </Row>
                            </Col>
                        </Row>
                    )
                    :
                    (
                        <Row justify={'space-between'}>

                            <Col>
                                <Button type={'text'} className={'logo-btn'} onClick={onLogoClick}>
                                    <SvgIcon type={'main-whale'}/>
                                </Button>
                                <div className={'header-logo-bg'}>
                                    <img src={greenBg} alt={"Green background"}/>
                                </div>
                            </Col>

                            <Popover
                                placement={'topLeft'}
                                title={null}
                                content={menuContent}
                                trigger={"click"}
                                arrow={false}
                                onOpenChange={onOpenChange}
                                open={isPopoverOpen}
                            >
                                <WebsiteButton
                                    className={"burger-button"}
                                    btnType="icon"
                                    icon={<BurgerIcon isOpen={isPopoverOpen} />}
                                />
                            </Popover>

                        </Row>
                    )}
            </div>
        </div>
    );
};

export default Header;