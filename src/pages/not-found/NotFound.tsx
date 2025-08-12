import {type FC, useEffect, useRef} from 'react';
import ScrollToTop from "@/hoc/scroll-to-top/ScrollToTop";
import Lottie from 'lottie-react';
import type {LottieRefCurrentProps} from 'lottie-react';

import './NotFound.scss'

import bgImg from './images/404-bg-img.png'
import bgHorizontalImg from './images/404-bg-img-horizont.png'
import catAnimation from '../../assets/lottie-animation/cat404.json'
import {Row, Col} from "antd";
import WebsiteTypography from "@/components/website-typography/WebsiteTypography";
import WebsiteButton from "@/components/website-button/WebsiteButton";
import {useNavigate} from "react-router";
import {SvgIcon} from "@/components/icon/SvgIcon";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";

const {Title, Paragraph} = WebsiteTypography;

const NotFound: FC = () => {
    const lottieRef = useRef<LottieRefCurrentProps>(null);

    const {xxl, xl, lg, md, sm} = useBreakpoint()

    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.setSpeed(1);
        }
    }, []);

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/projects')
    }

    return (
        <div className={'not-found-wrapper'}>

            <div className={'not-found-bg-wrapper'}>
                <img src={bgImg} alt={"abstract illustration on the background"}/>
            </div>
            <div className={'container'}>
                <Row justify={'center'}>
                    <Col
                        xxl={14} xl={14} lg={16} md={18} sm={20} xs={23}
                    >
                        <Row justify={'center'}>
                            <Col span={24}>
                                <Title level={(xxl||xl||lg||md||sm) ? 2 : 3} centered>{'Oops! Page Not Found'}</Title>
                            </Col>
                            <Paragraph centered style={{paddingTop: 32}}>
                                {'Well… this page must have gone on vacation!\nEither it\'s hiding somewhere in the code or hasn\'t been built yet'}
                            </Paragraph>

                            <Col
                                xxl={18} xl={18} lg={20} md={20} sm={23} xs={24}
                                 style={{paddingTop: 16}}
                            >
                                <div className={'lottie-box'}>

                                    <div className={'not-found-horizontal-bg-wrapper'}>
                                        <img src={bgHorizontalImg} alt={"illustration of the carpet"}/>
                                    </div>

                                    <Lottie
                                        lottieRef={lottieRef}
                                        animationData={catAnimation}
                                        loop
                                        autoplay
                                    />
                                </div>
                            </Col>

                            <Col
                                xxl={8} xl={8} lg={8} md={8} sm={20} xs={24}
                            >
                                <Row justify={'center'} style={{paddingTop: 48}}>
                                    <WebsiteButton
                                        btnType={'ghost'}
                                        size={'large'}
                                        icon={<SvgIcon type={'in-boxes'}/>}
                                        text={'Go to Projects Page'}
                                        onClick={handleClick}
                                        block
                                    />
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ScrollToTop(NotFound);