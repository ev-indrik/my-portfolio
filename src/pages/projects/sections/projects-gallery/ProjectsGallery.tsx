import './ProjectsGallery.scss';

import type {FC} from 'react';
import TitleIconGroup from "@/components/title-icon-group/TitleIconGroup";
import logoImg from '../../../../components/title-icon-group/images/hard-skills.png'

import WebsiteDivider from "@/components/website-divider/WebsiteDivider";

import projectsDataJson  from '../../../../data/projectsData.json';
import easetechEllipseImg from './images/bg-images/easetech-ellipse.png';

import shopEllipseImg from './images/bg-images/store-ellipse.png';

import storeBgImg from './images/bg-images/database-ellipse.png';

import geocalcEllipse from './images/bg-images/geocalc-ellipse.png';
import geocalcEllipse2 from './images/bg-images/geocalc-ellipse2.png';
import ProjectItem from "@/pages/projects/sections/projects-gallery/project-item/ProjectItem";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import type {ProjectItemType} from "@/type/types";

const imagesMap: Record<string, string> = {
    easetechEllipseImg,
    shopEllipseImg,
    storeBgImg,
    geocalcEllipse,
    geocalcEllipse2,
};

const ProjectsGallery: FC = () => {

    const {xxl, xl, lg, md} = useBreakpoint()

    const projectsData = projectsDataJson as ProjectItemType[]

    return (
        <div className={'projects-gallery-wrapper'}>

                <TitleIconGroup content={{title: 'My Projects', image: logoImg}}/>
                <div className={'container'}>
                    {(xxl||xl||lg||md) && <WebsiteDivider isReversed={true} paddingTop={0}/>}
                </div>
                <div className={'gallery-wrapper'}>
                    {projectsData.map((item) => (
                        <ProjectItem
                            it={item}
                            key={item.id}
                            bgImgUpper={item.bgImgUpper ? imagesMap[item.bgImgUpper] : undefined}
                            bgImgLower={item.bgImgLower ? imagesMap[item.bgImgLower] : undefined}
                            bgSectionImg={item.bgSectionImg ? imagesMap[item.bgSectionImg] : undefined}
                        />
                    ))}
                </div>
        </div>
    );
};

export default ProjectsGallery;