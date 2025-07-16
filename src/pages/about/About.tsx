import {type FC} from 'react';
import HeroSection from "../../components/hero-section/HeroSection";

import heroSectionContent from '../../data/heroSectionContent.json'
import imageSrc from '../../components/hero-section/images/about-hero-img.png'
import HardSkills from "@/pages/about/sections/hard-skills/HardSkills";
import WorkExperience from "@/pages/about/sections/work-experience/WorkExperience";
import experienceImg from '@/pages/about/assets/experience-summary.png';
import wavesImg from '@/pages/about/assets/waves-img.png'

const sectionData = heroSectionContent['about'];
const sectionDataExperience = heroSectionContent['experience'];

const About: FC = () => {
    return (
        <>
            <HeroSection
                mainTitle={sectionData.mainTitle}
                description={sectionData.description}
                buttonText={sectionData.buttonText}
                imageSrc={imageSrc}
            />
            <HardSkills/>
            <WorkExperience/>
            <HeroSection
                mainTitle={sectionDataExperience.mainTitle}
                description={sectionDataExperience.description}
                buttonText={sectionDataExperience.buttonText}
                imageSrc={experienceImg}
                isReversed={true}
                isBgImg={true}
                bgImg={wavesImg}
                spanNumber={12}
                svgType={'pdf'}
            />
        </>
    );
};

export default About;