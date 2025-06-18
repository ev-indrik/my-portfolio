import './HeroSection.scss';

import {type FC} from 'react';
import {Col, Row, Space, Typography} from "antd";

import homeHeroImg from './images/home-hero-img.png'
import {SvgIcon} from "../icon/SvgIcon.tsx";
import WebsiteButton from "../custom-button/WebsiteButton.tsx";

const {Title, Paragraph} = Typography;

const HeroSection: FC = () => {

    return (
        <div className={'hero-section-wrapper'}>

            <div className={'container'}>
                <Row wrap={false} gutter={24} className={'hero-section-content-wrapper'}>

                    <Col
                        span={8}
                        className={'texts-container'}
                    >
                        <Title level={2}>
                            {'Yevheniia Budko'}
                        </Title>
                        <Title level={4}>{'Front-end developer'}</Title>
                        <Paragraph>
                            {'I\'m a frontend developer passionate about crafting clean, responsive, and user-friendly web interfaces. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React, I build seamless digital experiences that are both functional and visually engaging.'}
                        </Paragraph>

                        <Row style={{paddingTop: 50}}>
                            <WebsiteButton btnType={'primary'} text={'Learn More'} size={'large'}/>
                        </Row>
                        <Row style={{paddingTop: 50}}>
                            <Space>
                                <WebsiteButton btnType={'icon'} icon={<SvgIcon type={'instagram'}/>} link={'https://github.com/ev-indrik'}/>
                                <WebsiteButton btnType={'icon'} icon={<SvgIcon type={'linkedin'}/>} link={'https://www.linkedin.com/in/evindrik/'}/>
                                <WebsiteButton btnType={'icon'} icon={<SvgIcon type={'facebook'}/>} link={'https://www.facebook.com/ev.indrik'}/>
                                <WebsiteButton btnType={'icon'} icon={<SvgIcon type={'instagram'}/>} link={'https://www.instagram.com/ev_indrik'}/>
                            </Space>
                        </Row>
                    </Col>

                    <Col flex={'auto'}>
                        <Row justify={'end'} align={'bottom'} style={{height: '100%'}}>
                            <div className={'image-container'}>
                                <img src={homeHeroImg} alt={'illustration of developer'}/>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default HeroSection;