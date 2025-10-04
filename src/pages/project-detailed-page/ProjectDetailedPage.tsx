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
import NotFound from "@/pages/not-found/NotFound";
import ReadMoreComponent from "@/components/read-more-component/ReadMoreComponent";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";

const ProjectDetailedPage: FC = () => {

    const {projectId} = useParams();
    const {xxl, xl, lg, md } = useBreakpoint()

    if (!projectId) {
        return <NotFound />
    }

    const navigate = useNavigate();

    const getProjectById = (id: string) => {
        return projects.find(project => project.id === id)
    }

    // ===>> ProjectItem receiving

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

                <Row justify={'center'} style={{paddingBottom: 16}}>
                    <Title level={(xxl|| xl || lg || md) ? 2 : 3} color={'primary'}>{project.title}</Title>
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
                    <Col
                        span={10}
                        xxl={10}
                        xl={10}
                        lg={10}
                        md={10}
                        sm={20}
                        xs={24}
                        style={{paddingBottom: 24}}
                    >
                        <Title level={(xxl|| xl || lg || md) ? 2 : 3} color={'primary'} centered>{'Project Description'}</Title>
                    </Col>
                    <Col
                        span={16}
                        xxl={16}
                        xl={16}
                        lg={16}
                        md={16}
                        sm={24}
                        xs={24}
                    >
                       <ReadMoreComponent text={project.detailedDescription} />
                    </Col>
                </Row>

                <Row justify={'center'} style={{paddingTop: 64}}>
                    <Col span={16}>
                        <Title level={3} centered color={'primary'}>{'Technological stack'}</Title>
                    </Col>
                    <Col span={20} style={{paddingTop: 32}}>
                        <Row justify={'center'} gutter={[0, 40]}>
                            {project?.techLogos?.map((logo) => (
                                <Col
                                    span={8}
                                    xxl={8}
                                    xl={8}
                                    lg={8}
                                    md={8}
                                    sm={20}
                                    xs={24}
                                    key={logo.logoKey}
                                >
                                    <TechLogoItem logoKey={logo.logoKey} title={logo.title}/>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>

                {!(xxl|| xl || lg || md) && <WebsiteDivider color={'blue'}/>}

                <Row justify={'center'} style={{paddingTop: (xxl|| xl || lg || md) ? 64 : 12}}>
                    <Col span={16}>
                        <Title level={3} centered color={'primary'}>{'Main Features'}</Title>
                    </Col>

                    <Col
                        span={20}
                        xxl={20}
                        xl={20}
                        lg={20}
                        md={20}
                        sm={24}
                        xs={24}
                        style={{paddingTop: 32, paddingBottom: 64}}
                    >
                        <Row justify={'center'}>
                            <Col
                                span={20}
                                xxl={20}
                                xl={20}
                                lg={20}
                                md={20}
                                sm={24}
                                xs={24}
                            >
                                <Row justify={'center'} align={'stretch'} gutter={[8, 8]}>

                                    {project?.tickedBoxes?.map((box, index) => (
                                        <Col
                                            span={12}
                                            xxl={12}
                                            xl={12}
                                            lg={12}
                                            md={12}
                                            sm={24}
                                            xs={24}
                                        >
                                            <div className={"ticked-box-wrapper"} key={index}>
                                                <div className={"header-title-box"}>
                                                    <SvgIcon type={"ticked-square"} className={"svg-box"}/>
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

                {(xxl|| xl || lg || md) && <WebsiteDivider color={'blue'}/>}

                <Row justify={'center'}>
                    <Col
                        span={12}
                        xxl={12}
                        xl={12}
                        lg={12}
                        md={16}
                        sm={20}
                        xs={24}
                    >
                        <Row justify={'center'} gutter={[16, 16]} style={{width: '100%'}}>
                            {project.githubUrl &&
                                <Col
                                    span={12}
                                    xxl={12}
                                    xl={12}
                                    lg={12}
                                    md={12}
                                    sm={12}
                                    xs={24}
                                    style={{display: 'flex', justifyContent: 'center'}}
                                >
                                <WebsiteButton
                                    btnType={'ghost'}
                                    icon={<SvgIcon type={'github-ghost'}/>}
                                    text={'See Project on Github'}
                                    size={'large'}
                                    block
                                    onClick={onGithubClick}
                                />
                            </Col>}
                            <Col
                                span={12}
                                xxl={12}
                                xl={12}
                                lg={12}
                                md={12}
                                sm={12}
                                xs={24}
                                style={{display: 'flex', justifyContent: 'center'}}
                            >
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