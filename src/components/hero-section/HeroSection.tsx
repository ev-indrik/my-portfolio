import './HeroSection.scss';

import {type FC} from 'react';
import {Button, Col, Row, Typography} from "antd";

import homeHeroImg from './images/home-hero-img.png'
import {SvgIcon} from "../icon/SvgIcon.tsx";

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
                            <Button type={'primary'}>{'Learn more'}</Button>
                        </Row>
                        <Row style={{paddingTop: 50}}>
                               <Button type={'text'}><SvgIcon type={'facebook'}/></Button>
                               <Button type={'text'}><SvgIcon type={'instagram'}/></Button>
                               <Button type={'text'}><SvgIcon type={'linkedin'}/></Button>
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

                {/*<Row style={{border: '1px solid green'}}>*/}
                {/*    <Col>*/}
                {/*        <h3>{'SOCIALs'}</h3>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
            </div>
        </div>
    );
};

export default HeroSection;