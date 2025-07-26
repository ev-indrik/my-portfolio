import {type FC} from 'react';
import HeroSection from "../../components/hero-section/HeroSection";

import heroSectionContent from '../../data/heroSectionContent.json'
import imageSrc from '../../components/hero-section/images/about-hero-img.png'
import HardSkills from "@/pages/about/sections/hard-skills/HardSkills";
import WorkExperience from "@/pages/about/sections/work-experience/WorkExperience";
import experienceAnimation from '@/assets/lottie-animation/cat-coding.json';
import leaveHorizontalImg from '@/pages/about/assets/horizontal_leave.png'
import {useNavigate} from "react-router";
import ScrollToTop from "@/hoc/scroll-to-top/ScrollToTop";

const sectionData = heroSectionContent['about'];
const sectionDataExperience = heroSectionContent['experience'];

const About: FC = () => {

    const navigate = useNavigate()
    const onProjectsClick = () => navigate('/projects')

    const onPdfClick = ()=>{
        const link = document.createElement('a');
        link.href = '/2025_cv_ev-indrik.pdf';
        link.download = 'cv-yevheniia.pdf'; // naming on save
        link.click();
    }

    return (
        <>
            <HeroSection
                mainTitle={sectionData.mainTitle}
                description={sectionData.description}
                buttonText={sectionData.buttonText}
                imageSrc={imageSrc}
                onClick={onProjectsClick}
            />
            <HardSkills/>
            <WorkExperience/>
            <HeroSection
                mainTitle={sectionDataExperience.mainTitle}
                description={sectionDataExperience.description}
                buttonText={sectionDataExperience.buttonText}
                animationSrc={experienceAnimation}
                isReversed={true}
                isBgImg={true}
                bgImg={leaveHorizontalImg}
                spanNumber={12}
                svgType={'pdf'}
                paddingBtm={60}
                onClick={onPdfClick}
            />
        </>
    );
};

export default ScrollToTop(About);