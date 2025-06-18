import {type FC} from 'react';
import imageSrc from "../../components/hero-section/images/projects-hero-img.png";
import HeroSection from "../../components/hero-section/HeroSection";

import heroSectionContent from '../../data/heroSectionContent.json'
const sectionData = heroSectionContent['projects'];

const Projects: FC = () => {
    return (
        <HeroSection
            mainTitle={sectionData.mainTitle}
            description={sectionData.description}
            imageSrc={imageSrc}
            isMainButton={false}
        />
    );
};

export default Projects;