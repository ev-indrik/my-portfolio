import {type FC} from 'react';
import HeroSection from "../../components/hero-section/HeroSection";

import heroSectionContent from '../../data/heroSectionContent.json'
import imageSrc from '../../components/hero-section/images/about-hero-img.png'
import bgImg from '../../components/hero-section/images/bg-images/about-bg-img.png'
import HardSkills from "@/pages/about/sections/hard-skills/HardSkills";
import WorkExperience from "@/pages/about/sections/work-experience/WorkExperience";
import experienceAnimation from '@/assets/lottie-animation/cat-coding.json';
import gearsAnimation from '@/assets/lottie-animation/gears.json';
import leaveHorizontalImg from '@/pages/about/assets/horizontal_leave.png'
import {useNavigate} from "react-router";
import ScrollToTop from "@/hoc/scroll-to-top/ScrollToTop";
import {onPdfClick} from "@/components/download-pfd-btn/DownloadPdfBtn";
import useIsMobile from "@/hook/useIsMobile";
// import SoonForMobile from "@/components/soon-for-mobile/SoonForMobile";

const sectionData = heroSectionContent['about'];
const sectionDataExperience = heroSectionContent['experience'];

const About: FC = () => {

        const navigate = useNavigate()
        const onProjectsClick = () => navigate('/projects')
        const isMobile = useIsMobile();

        return isMobile ? (
            <>
                    <HeroSection
                        mainTitle={sectionData.mainTitle}
                        description={sectionData.description}
                        buttonText={sectionData.buttonText}
                        imageSrc={imageSrc}
                        onClick={onProjectsClick}
                        bgImg={{
                                image: bgImg,
                                desktop: {width: '86%', right: '-175px', top: '-40px'},
                                mobile: {width: '100%', bottom: 80, right: 0}
                        }}
                    />
                {/*<SoonForMobile/>*/}
            </>
        ) : (
            <>
                <HeroSection
                    mainTitle={sectionData.mainTitle}
                    description={sectionData.description}
                    buttonText={sectionData.buttonText}
                    imageSrc={imageSrc}
                    onClick={onProjectsClick}
                    bgImg={{
                            image: bgImg,
                            desktop: {width: '86%', right: '-225px'}
                }}
                />
                <HardSkills/>
                <WorkExperience/>
                <HeroSection
                    mainTitle={sectionDataExperience.mainTitle}
                    description={sectionDataExperience.description}
                    buttonText={sectionDataExperience.buttonText}
                    animationSrc={experienceAnimation}
                    animationBgSrc={gearsAnimation}
                    isReversed
                    bgImg={{
                            image: leaveHorizontalImg,
                            desktop: {width: '60%', bottom: '-30px', left: 0}
                    }}
                    isImgMirrored
                    svgType="pdf"
                    paddingBtm={90}
                    onClick={onPdfClick}
                />
            </>
        );
    }
;

export default ScrollToTop(About);