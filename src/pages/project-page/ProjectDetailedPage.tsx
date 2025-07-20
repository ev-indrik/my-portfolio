import type {FC} from 'react';
import './ProjectDetailedPage.scss'
import {Carousel, Col, Row} from "antd";

import WebsiteTypography from "@/components/website-typography/WebsiteTypography";

import upperBgImg from './images/upper-petals-project.png'
import lowerBgImg from './images/lower-petals-project.png'

import projectImg from '../projects/sections/projects-gallery/images/easetech.png'

import TechLogoItem from "@/components/tech-logo-item/TechLogoItem";
import {SvgIcon} from "@/components/icon/SvgIcon";
import WebsiteDivider from "@/components/website-divider/WebsiteDivider";
import WebsiteButton from "@/components/website-button/WebsiteButton";
import {useNavigate, useParams} from "react-router";
import type {ProjectItemProps} from "@/pages/projects/sections/projects-gallery/project-item/ProjectItem";

const {Title, Paragraph} = WebsiteTypography;
import projects from '../../data/projectsData.json'

// type Props = {
//     projectId: string;
// }

const ProjectDetailedPage: FC = () => {

    const { projectId } = useParams();

    if (!projectId) {
        return
        // return <Page404/>
    }

    const navigate = useNavigate();

    const getProjectById = (id: string) => {
        return projects.find(project => project.id === id)
    }

    const project: ProjectItemProps | undefined = getProjectById(projectId || '')

    const backToGalleryClick = () => {
        navigate(-1)
    };

    if (!project) return <div>Project not found</div>;

    return (
        <div className={'project-page-wrapper'}>

            <div className={'upper-project-img-wrapper'}>
                <img src={upperBgImg} alt={"background illustration"}/>
            </div>

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
                        <img src={projectImg} alt={"project screenshot"}/>
                    </div>
                    <div className={'slider-item-wrapper'}>
                        <img src={projectImg} alt={'project screenshot'}/>
                    </div>
                </Carousel>

                <Row justify={'center'} style={{paddingTop: 64}}>
                    <Col span={10} style={{paddingBottom: 24}}>
                        <Title level={3} color={'primary'} centered>{'Project Description'}</Title>
                    </Col>
                    <Col span={16}>
                        <Paragraph
                            centered
                            color={'primary'}
                        >
                            {'Development of a modern platform that facilitates document and wayleave workflows between organizations and clients. The system includes user registration, quote requests, document handling, and geospatial data interactions.'}
                        </Paragraph>
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

                    <Col span={20} style={{paddingTop: 32, paddingBottom: 64}}>
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

                        </Row>
                    </Col>
                </Row>

                <WebsiteDivider color={'blue'}/>

                <Row justify={'center'}>
                    <Col span={12}>
                        <Row justify={'center'} gutter={16} style={{width: '100%'}}>
                            <Col span={12} style={{display: 'flex', justifyContent: 'center'}}>
                                <WebsiteButton
                                    btnType={'ghost'}
                                    icon={<SvgIcon type={'github-ghost'}/>}
                                    text={'See Project on Github'}
                                    size={'large'}
                                    block
                                />
                            </Col>
                            <Col span={12} style={{display: 'flex', justifyContent: 'center'}}>
                                <WebsiteButton
                                    btnType={'secondary'}
                                    icon={<SvgIcon type={'rocket-ghost'}/>}
                                    text={'See deployed project'}
                                    size={'large'}
                                    block
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row justify={'center'} style={{paddingTop: 64}}>
                    <WebsiteButton
                        btnType={'text'}
                        icon={<SvgIcon type={'arrow-short'}/>}
                        text={'Back to Projects Gallery'}
                        color={'primary'}
                        size={'large'}
                        onClick={backToGalleryClick}
                    />
                </Row>
            </div>

            <div className={'lower-project-img-wrapper'}>
                <img src={lowerBgImg} alt={"background illustration"}/>
            </div>

        </div>
    );
};

export default ProjectDetailedPage;