import type {FC} from 'react';
import './ProjectPage.scss'
import {Row, Carousel, Col} from "antd";

import WebsiteTypography from "@/components/website-typography/WebsiteTypography";

const {Title, Paragraph} = WebsiteTypography;

import img1 from '../projects/sections/projects-gallery/images/easetech.png'
import img2 from '../projects/sections/projects-gallery/images/geo-calc.png'

import TechLogoItem from "@/components/tech-logo-item/TechLogoItem";
import {SvgIcon} from "@/components/icon/SvgIcon";
import WebsiteDivider from "@/components/website-divider/WebsiteDivider";

const ProjectPage: FC = () => {

    return (
        <div className={'project-page-wrapper'}>
            <div className={'container'}>

                <Row justify={'center'}>
                    <Title level={2} color={'primary'}>{'Easetech'}</Title>
                </Row>

                <Carousel
                    effect="fade"
                    autoplay
                    autoplaySpeed={5000}
                >
                    <div className={'slider-item-wrapper'}>
                        <img src={img1} alt=""/>
                    </div>
                    <div className={'slider-item-wrapper'}>
                        <img src={img2} alt=""/>
                    </div>
                </Carousel>

                <Row justify={'center'} style={{paddingTop: 64}}>
                    <Col span={10} style={{paddingBottom: 24}}>
                        <Title level={3} color={'primary'} centered>{'Project Description'}</Title>
                    </Col>
                    <Col span={16}>
                        <Paragraph centered
                                   color={'primary'}>{'Development of a modern platform that facilitates document and wayleave workflows between organizations and clients. The system includes user registration, quote requests, document handling, and geospatial data interactions.'}</Paragraph>
                    </Col>
                </Row>

                <Row justify={'center'} style={{paddingTop: 64}}>
                    <Col span={16}>
                        <Title level={3} centered color={'primary'}>{'Technological stack'}</Title>
                    </Col>
                    <Col span={20} style={{paddingTop: 32}}>
                        <Row justify={'center'}>
                            <Col span={8}>
                                <TechLogoItem logoKey={'tsImg'} title={'TypeScript'}/>
                            </Col>
                            <Col span={8}>
                                <TechLogoItem logoKey={'reactImg'} title={'React'}/>
                            </Col>
                            <Col span={8}>
                                <TechLogoItem logoKey={'sassImg'} title={'Sass/Less'}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>


                <Row justify={'center'} style={{paddingTop: 64}}>
                    <Col span={16}>
                        <Title level={3} centered color={'primary'}>{'Main Features'}</Title>
                    </Col>

                    <Col span={22} style={{paddingTop: 32}}>
                        <Row justify={'center'}>
                            <Col span={20}>
                                <Row justify={'center'} align={'stretch'} gutter={[8, 8]}>
                                    <Col span={12}>

                                        <div className={'ticked-box-wrapper'}>
                                            <div className={'header-title-box'}>
                                                <SvgIcon type={'ticked-square'} className={'svg-box'}/>
                                                <Title
                                                    level={5}
                                                    color={'primary'}
                                                    style={{marginLeft: 16}}
                                                >
                                                    {'Enforcement Module'}
                                                </Title>
                                            </div>
                                            <Paragraph color={'primary'} style={{marginLeft: 40, paddingTop: 8}}>
                                                {'Users can submit applications with geospatial data (GeoJSON polygons).'}
                                            </Paragraph>
                                        </div>

                                    </Col>
                                    <Col span={12}>

                                        <div className={'ticked-box-wrapper'}>
                                            <div className={'header-title-box'}>
                                                <SvgIcon type={'ticked-square'} className={'svg-box'}/>
                                                <Title
                                                    level={5}
                                                    color={'primary'}
                                                    style={{marginLeft: 16}}
                                                >
                                                    {'Enforcement Module'}
                                                </Title>
                                            </div>
                                            <Paragraph color={'primary'} style={{marginLeft: 40, paddingTop: 8}}>
                                                {'Users can submit applications with geospatial data (GeoJSON polygons).'}
                                            </Paragraph>
                                        </div>

                                    </Col>
                                    <Col span={12}>

                                        <div className={'ticked-box-wrapper'}>
                                            <div className={'header-title-box'}>
                                                <SvgIcon type={'ticked-square'} className={'svg-box'}/>
                                                <Title
                                                    level={5}
                                                    color={'primary'}
                                                    style={{marginLeft: 16}}
                                                >
                                                    {'Enforcement Module'}
                                                </Title>
                                            </div>
                                            <Paragraph color={'primary'} style={{marginLeft: 40, paddingTop: 8}}>
                                                {'Users can submit applications with geospatial data (GeoJSON polygons).'}
                                            </Paragraph>
                                        </div>

                                    </Col>

                                    <Col span={12}>

                                        <div className={'ticked-box-wrapper'}>
                                            <div className={'header-title-box'}>
                                                <SvgIcon type={'ticked-square'} className={'svg-box'}/>
                                                <Title
                                                    level={5}
                                                    color={'primary'}
                                                    style={{marginLeft: 16}}
                                                >
                                                    {'Enforcement Module'}
                                                </Title>
                                            </div>
                                            <Paragraph color={'primary'} style={{marginLeft: 40, paddingTop: 8}}>
                                                {'Users can submit applications with geospatial data (GeoJSON polygons).'}
                                            </Paragraph>
                                        </div>

                                    </Col>
                                </Row>
                            </Col>

                            <Col span={20}></Col>
                        </Row>
                    </Col>
                </Row>

                <WebsiteDivider color={'blue'}/>

            </div>
        </div>
    );
};

export default ProjectPage;