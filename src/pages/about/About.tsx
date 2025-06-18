import {type FC} from 'react';
import HeroSection from "../../components/hero-section/HeroSection";

import heroSectionContent from '../../data/heroSectionContent.json'
const sectionData = heroSectionContent['about'];
import imageSrc from '../../components/hero-section/images/about-hero-img.png'

const About: FC = () => {
    return (
        <HeroSection
            mainTitle={sectionData.mainTitle}
            description={sectionData.description}
            buttonText={sectionData.buttonText}
            imageSrc={imageSrc}
        />
    );
};

export default About;