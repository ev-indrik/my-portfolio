import {type FC, useEffect, useRef} from 'react';
import ScrollToTop from "@/hoc/scroll-to-top/ScrollToTop";
import Lottie from 'lottie-react';
import type {LottieRefCurrentProps} from 'lottie-react';

import './ErrorPage.scss'

import catWithLampAnimation from '../../assets/lottie-animation/cat-with-lamp.json'
import {Row, Col, Space} from "antd";
import WebsiteTypography from "@/components/website-typography/WebsiteTypography";
import WebsiteButton from "@/components/website-button/WebsiteButton";
import {useNavigate} from "react-router";
import {SvgIcon} from "@/components/icon/SvgIcon";

const {Title, Paragraph} = WebsiteTypography;

const ErrorPage: FC = () => {
    const lottieRef = useRef<LottieRefCurrentProps>(null);

    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.setSpeed(1);
        }
    }, []);

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/home')
    }

    const onReload = () => {
        window.location.reload()
    }

    return (
        <div className={'error-page-wrapper'}>
            <div className={'container'}>
                <Row justify={'center'}>
                    <Col span={14}>
                        <Row justify={'center'}>
                            <Col span={24}>
                                <Title level={3} centered>{'Oops! Something went wrong...'}</Title>
                            </Col>
                            <Paragraph centered style={{paddingTop: 16}}>
                                {'The page tried its best, but something unexpected happened.\nTry refreshing or come back a little later! Sorry for inconvenience '}
                            </Paragraph>

                            <Col span={18} style={{paddingTop: 16}}>
                                <Row justify={'center'}>
                                    <div className={'lottie-box'}>
                                        <Lottie
                                            lottieRef={lottieRef}
                                            animationData={catWithLampAnimation}
                                            loop
                                            autoplay
                                        />
                                    </div>
                                </Row>
                            </Col>

                            <Col span={8}>
                                <Row justify={'center'} style={{paddingTop: 30}}>
                                    <Space>
                                        <WebsiteButton
                                            btnType={'primary'}
                                            icon={<SvgIcon type={'refresh'}/>}
                                            text={'Refresh the page'}
                                            onClick={onReload}
                                            className={'refresh-button'}
                                        />

                                        <WebsiteButton
                                            btnType={'ghost'}
                                            icon={<SvgIcon type={'home'}/>}
                                            text={'Go Home'}
                                            onClick={handleClick}
                                            className={'home-button'}
                                        />
                                    </Space>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ScrollToTop(ErrorPage);