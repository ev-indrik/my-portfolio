import './ProjectsGallery.scss';

import type {FC} from 'react';
import TitleIconGroup from "@/components/title-icon-group/TitleIconGroup";
import logoImg from '../../../../components/title-icon-group/images/hard-skills.png'

import WebsiteDivider from "@/components/website-divider/WebsiteDivider";
import ProjectItem from "@/pages/projects/sections/projects-gallery/project-item/ProjectItem";
import {useNavigate} from "react-router";

import projectsData from '../../../../data/projectsGalleryData.json';
import easetechImg from './images/easetech.png';
import easetechEllipseImg from './images/bg-images/easetech-ellipse.png';

import shopImg from './images/store.png';
import shopEllipseImg from './images/bg-images/store-ellipse.png';

import volunteersImg from './images/database.png';
import storeBgImg from './images/bg-images/database-ellipse.png';

import calcImg from './images/geo-calc.png';
import geocalcEllipse from './images/bg-images/geocalc-ellipse.png';
import geocalcEllipse2 from './images/bg-images/geocalc-ellipse2.png';

const imagesMap: Record<string, string> = {
    easetechImg,
    easetechEllipseImg,
    shopImg,
    shopEllipseImg,
    volunteersImg,
    storeBgImg,
    calcImg,
    geocalcEllipse,
    geocalcEllipse2,
};

const ProjectsGallery: FC = () => {

    const navigate = useNavigate();

    return (
        <div className={'projects-gallery-wrapper'}>

                <TitleIconGroup content={{title: 'My Projects', image: logoImg}}/>
                <div className={'container'}>
                    <WebsiteDivider isReversed={true}/>
                </div>
                <div className={'gallery-wrapper'}>
                    {projectsData.map((item, idx) => (
                        <ProjectItem
                            key={idx}
                            title={item.title}
                            description={item.description}
                            projectImg={imagesMap[item.projectImg]}
                            bgImgUpper={item.bgImgUpper ? imagesMap[item.bgImgUpper] : undefined}
                            bgImgLower={item.bgImgLower ? imagesMap[item.bgImgLower] : undefined}
                            isDivider={item.isDivider}
                            isReversed={item.isReversed}
                            onClick={() => navigate(item.onClickRoute)}
                        />
                    ))}
                </div>
        </div>
    );
};

export default ProjectsGallery;