import './ProjectsGallery.scss';

import type {FC} from 'react';
import TitleIconGroup from "@/components/title-icon-group/TitleIconGroup";
import logoImg from '../../../../components/title-icon-group/images/hard-skills.png'

import WebsiteDivider from "@/components/website-divider/WebsiteDivider";
import ProjectItem from "@/pages/projects/sections/projects-gallery/project-item/ProjectItem";

import projectsData from '../../../../data/projectsData.json';
import easetechImg from './images/easetech.png';
import easetechEllipseImg from './images/bg-images/easetech-ellipse.png';

import storeImg from './images/store.png';
import shopEllipseImg from './images/bg-images/store-ellipse.png';

import databaseImg from './images/database.png';
import storeBgImg from './images/bg-images/database-ellipse.png';

import calculatorImg from './images/geo-calc.png';
import geocalcEllipse from './images/bg-images/geocalc-ellipse.png';
import geocalcEllipse2 from './images/bg-images/geocalc-ellipse2.png';

const imagesMap: Record<string, string> = {
    easetechImg,
    easetechEllipseImg,
    storeImg,
    shopEllipseImg,
    databaseImg,
    storeBgImg,
    calculatorImg,
    geocalcEllipse,
    geocalcEllipse2,
};

const ProjectsGallery: FC = () => {

    return (
        <div className={'projects-gallery-wrapper'}>

                <TitleIconGroup content={{title: 'My Projects', image: logoImg}}/>
                <div className={'container'}>
                    <WebsiteDivider isReversed={true}/>
                </div>
                <div className={'gallery-wrapper'}>
                    {projectsData.map((item) => (
                        <ProjectItem
                            id={item.id}
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            projectImgs={item.projectImgs.map((key) => imagesMap[key])}
                            bgImgUpper={item.bgImgUpper ? imagesMap[item.bgImgUpper] : undefined}
                            bgImgLower={item.bgImgLower ? imagesMap[item.bgImgLower] : undefined}
                            bgSectionImg={item.bgSectionImg ? imagesMap[item.bgSectionImg] : undefined}
                            isDivider={item.isDivider}
                            isReversed={item.isReversed}
                        />
                    ))}
                </div>
        </div>
    );
};

export default ProjectsGallery;