import type {FC} from 'react';
import './ProjectDetailedPage.scss'
import {Carousel, Col, Row} from "antd";

import WebsiteTypography from "@/components/website-typography/WebsiteTypography";

import upperBgImg from './images/upper-petals-project.png'
import lowerBgImg from './images/lower-petals-project.png'

import TechLogoItem from "@/components/tech-logo-item/TechLogoItem";
import type {TechContent} from '@/components/tech-logo-item/TechLogoItem'
import {SvgIcon} from "@/components/icon/SvgIcon";
import WebsiteDivider from "@/components/website-divider/WebsiteDivider";
import WebsiteButton from "@/components/website-button/WebsiteButton";
import {useNavigate, useParams} from "react-router";

const {Title, Paragraph} = WebsiteTypography;
import projects from '../../data/projectsData.json'
import type {ProjectItemType} from "@/type/types";
import ScrollToTop from "@/hoc/scroll-to-top/ScrollToTop";

const ProjectDetailedPage: FC = () => {

    const {projectId} = useParams();

    if (!projectId) {
        return
        // return <Page404/>
    }

    const navigate = useNavigate();

    const getProjectById = (id: string) => {
        return projects.find(project => project.id === id)
    }

    // ===>> ProjectItem receving

    const project = getProjectById(projectId || '') as ProjectItemType & {
        techLogos: TechContent[];
    };

    const onGithubClick = () => {
        if (!project?.githubUrl) return;
        window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
    };

    const onDeployedClick = () => {
        if (!project?.deployedUrl) return;
        window.open(project.deployedUrl, '_blank', 'noopener,noreferrer');
    };

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
                    <Title level={2} color={'primary'}>{project.title}</Title>
                </Row>

                <Carousel
                    effect={'fade'}
                    autoplay
                    autoplaySpeed={5000}
                >
                    {project.projectImgs.map((imgUrl, idx) => (
                        <div className={'slider-item-wrapper'} key={idx}>
                            <img src={imgUrl} alt={`project screenshot`} />
                        </div>
                    ))}

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
                            {project.detailedDescription}
                        </Paragraph>
                    </Col>
                </Row>

                <Row justify={'center'} style={{paddingTop: 64}}>
                    <Col span={16}>
                        <Title level={3} centered color={'primary'}>{'Technological stack'}</Title>
                    </Col>
                    <Col span={20} style={{paddingTop: 32}}>
                        <Row justify={'center'} gutter={[0, 40]}>
                            {project?.techLogos?.map((logo) => (
                                <Col span={8} key={logo.logoKey}>
                                    <TechLogoItem logoKey={logo.logoKey} title={logo.title}/>
                                </Col>
                            ))}
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

                                    {project?.tickedBoxes?.map((box, index) => (
                                        <Col span={12}>
                                            <div className="ticked-box-wrapper" key={index}>
                                                <div className="header-title-box">
                                                    <SvgIcon type="ticked-square" className="svg-box"/>
                                                    <Title
                                                        level={5}
                                                        color={"primary"}
                                                        style={{marginLeft: 16}}
                                                    >
                                                        {box.tickedTitle}
                                                    </Title>
                                                </div>
                                                <Paragraph color={"primary"} style={{marginLeft: 40, paddingTop: 8}}>
                                                    {box.tickedDescription}
                                                </Paragraph>
                                            </div>
                                        </Col>
                                    ))}

                                </Row>
                            </Col>

                        </Row>
                    </Col>
                </Row>

                <WebsiteDivider color={'blue'}/>

                <Row justify={'center'}>
                    <Col span={12}>
                        <Row justify={'center'} gutter={16} style={{width: '100%'}}>
                            {project.githubUrl && <Col span={12} style={{display: 'flex', justifyContent: 'center'}}>
                                <WebsiteButton
                                    btnType={'ghost'}
                                    icon={<SvgIcon type={'github-ghost'}/>}
                                    text={'See Project on Github'}
                                    size={'large'}
                                    block
                                    onClick={onGithubClick}
                                />
                            </Col>}
                            <Col span={12} style={{display: 'flex', justifyContent: 'center'}}>
                                <WebsiteButton
                                    btnType={'secondary'}
                                    icon={<SvgIcon type={'rocket-ghost'}/>}
                                    text={'See deployed project'}
                                    size={'large'}
                                    block
                                    onClick={onDeployedClick}
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

export default ScrollToTop(ProjectDetailedPage);