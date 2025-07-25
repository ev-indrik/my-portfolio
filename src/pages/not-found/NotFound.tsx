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

const {Title, Paragraph} = WebsiteTypography;

const NotFound: FC = () => {
    const lottieRef = useRef<LottieRefCurrentProps>(null);

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
                    <Col span={14}>
                        <Row justify={'center'}>
                            <Col span={24}>
                                <Title level={2} centered>{'Oops! Page Not Found'}</Title>
                            </Col>
                            <Paragraph centered style={{paddingTop: 32}}>
                                {'Well… this page must have gone on vacation!\nEither it\'s hiding somewhere in the code or hasn\'t been built yet'}
                            </Paragraph>

                            <Col span={18} style={{paddingTop: 16}}>
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

                            <Col span={8}>
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