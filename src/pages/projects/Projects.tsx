import {type FC} from 'react';
import imageSrc from "../../components/hero-section/images/projects-hero-img.png";
import HeroSection from "../../components/hero-section/HeroSection";

import heroSectionContent from '../../data/heroSectionContent.json'
import ProjectsGallery from "@/pages/projects/sections/projects-gallery/ProjectsGallery";
import ScrollToTop from "@/hoc/scroll-to-top/ScrollToTop";
import WebsiteDivider from "@/components/website-divider/WebsiteDivider";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";

const sectionData = heroSectionContent['projects'];

const Projects: FC = () => {

    const {xxl, xl, lg, md} = useBreakpoint()

    return (
        <>
            <HeroSection
                mainTitle={sectionData.mainTitle}
                description={sectionData.description}
                imageSrc={imageSrc}
                isMainButton={false}
                spanNumber={10}
            />
            {!(xxl || xl || lg || md) && <div className={'container'} style={{marginTop: -60, marginBottom: -40}}>
                <WebsiteDivider/>
            </div>
            }
            <ProjectsGallery/>
        </>
    );
};

export default ScrollToTop(Projects);