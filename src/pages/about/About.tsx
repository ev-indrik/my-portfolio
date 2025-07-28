import {type FC} from 'react';
import HeroSection from "../../components/hero-section/HeroSection";

import heroSectionContent from '../../data/heroSectionContent.json'
import imageSrc from '../../components/hero-section/images/about-hero-img.png'
import HardSkills from "@/pages/about/sections/hard-skills/HardSkills";
import WorkExperience from "@/pages/about/sections/work-experience/WorkExperience";
import experienceAnimation from '@/assets/lottie-animation/cat-coding.json';
import gearsAnimation from '@/assets/lottie-animation/gears.json';
import leaveHorizontalImg from '@/pages/about/assets/horizontal_leave.png'
import {useNavigate} from "react-router";
import ScrollToTop from "@/hoc/scroll-to-top/ScrollToTop";
import {onPdfClick} from "@/components/download-pfd-btn/DownloadPdfBtn";

const sectionData = heroSectionContent['about'];
const sectionDataExperience = heroSectionContent['experience'];

const About: FC = () => {

    const navigate = useNavigate()
    const onProjectsClick = () => navigate('/projects')

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
                animationBgSrc={gearsAnimation}
                isReversed={true}
                isBgImg={true}
                bgImg={leaveHorizontalImg}
                isImgMirrored={true}
                spanNumber={12}
                svgType={'pdf'}
                paddingBtm={90}
                onClick={onPdfClick}
            />
        </>
    );
};

export default ScrollToTop(About);