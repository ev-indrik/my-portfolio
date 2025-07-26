import {type FC} from 'react';
import imageSrc from "../../components/hero-section/images/projects-hero-img.png";
import HeroSection from "../../components/hero-section/HeroSection";

import heroSectionContent from '../../data/heroSectionContent.json'
import ProjectsGallery from "@/pages/projects/sections/projects-gallery/ProjectsGallery";
import ScrollToTop from "@/hoc/scroll-to-top/ScrollToTop";

const sectionData = heroSectionContent['projects'];

const Projects: FC = () => {
    return (
        <>
            <HeroSection
                mainTitle={sectionData.mainTitle}
                description={sectionData.description}
                imageSrc={imageSrc}
                isMainButton={false}
                spanNumber={11}
                paddingBtm={60}
                offsetNumber={1}
            />
            <ProjectsGallery/>
        </>
    );
};

export default ScrollToTop(Projects);