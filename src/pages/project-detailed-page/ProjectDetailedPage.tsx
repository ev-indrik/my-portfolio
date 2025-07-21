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

// ===>>> Projects images
import easetechImg from '../projects/sections/projects-gallery/images/easetech.png'
import easetech2Img from './images/projects-images/easetech2.png'
import easetech3Img from './images/projects-images/easetech3.png'
import easetech4Img from './images/projects-images/easetech4.png'
import easetech5Img from './images/projects-images/easetech5.png'

import calculatorImg from '../projects/sections/projects-gallery/images/geo-calc.png'
import calculator2Img from './images/projects-images/calc2.png'
import calculator3Img from './images/projects-images/calc3.png'
import calculator4Img from './images/projects-images/calc4.png'

import storeImg from '../projects/sections/projects-gallery/images/store.png'
import store2Img from './images/projects-images/shop2.png'
import store3Img from './images/projects-images/shop3.png'
import store4Img from './images/projects-images/shop4.png'
import store5Img from './images/projects-images/shop5.png'

import databaseImg from '../projects/sections/projects-gallery/images/database.png'
import database2Img from './images/projects-images/database2.png'
import database3Img from './images/projects-images/database3.png'
import database4Img from './images/projects-images/database4.png'

const imageMap: Record<string, string> = {
    easetechImg,
    easetech2Img,
    easetech3Img,
    easetech4Img,
    easetech5Img,

    calculatorImg,
    calculator2Img,
    calculator3Img,
    calculator4Img,

    storeImg,
    store2Img,
    store3Img,
    store4Img,
    store5Img,

    databaseImg,
    database2Img,
    database3Img,
    database4Img,
};

// ===>>> Projects images end

const {Title, Paragraph} = WebsiteTypography;
import projects from '../../data/projectsData.json'
import type {ProjectItemProps} from "@/type/types";

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

    const project = getProjectById(projectId || '') as ProjectItemProps & {
        techLogos: TechContent[];
    };
    // const project: ProjectItemProps | undefined = getProjectById(projectId || '')

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
                    {project.projectImgs.map((imgKey, idx) => (
                        <div className={'slider-item-wrapper'} key={idx}>
                            <img src={imageMap[imgKey]} alt={`project screenshot ${idx + 1}`} />
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
                            <Col span={12} style={{display: 'flex', justifyContent: 'center'}}>
                                <WebsiteButton
                                    btnType={'ghost'}
                                    icon={<SvgIcon type={'github-ghost'}/>}
                                    text={'See Project on Github'}
                                    size={'large'}
                                    block
                                    onClick={onGithubClick}
                                />
                            </Col>
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

export default ProjectDetailedPage;