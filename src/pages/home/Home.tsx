import {type FC} from 'react';
import HeroSection from "../../components/hero-section/HeroSection.tsx";

import heroSectionContent from '../../data/heroSectionContent.json';

const sectionData = heroSectionContent['home'];

import imageSrc from '../../components/hero-section/images/home-hero-img.png'
import {useNavigate} from "react-router";
import ScrollToTop from "@/hoc/scroll-to-top/ScrollToTop";

const Home: FC = () => {

    const navigate = useNavigate()
    const onLearnMoreClick = () => navigate('/about')

    return (
            <HeroSection
                mainTitle={sectionData.mainTitle}
                subTitle={sectionData.subTitle}
                description={sectionData.description}
                buttonText={sectionData.buttonText}
                imageSrc={imageSrc}
                onClick={onLearnMoreClick}
                paddingBtm={8}
            />
    );
};

export default ScrollToTop(Home);