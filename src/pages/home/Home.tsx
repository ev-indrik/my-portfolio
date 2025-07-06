import {type FC} from 'react';
import HeroSection from "../../components/hero-section/HeroSection.tsx";

import heroSectionContent from '../../data/heroSectionContent.json';

const sectionData = heroSectionContent['home'];

import imageSrc from '../../components/hero-section/images/home-hero-img.png'

const Home: FC = () => {

    return (
            <HeroSection
                isSocialButtons={true}
                mainTitle={sectionData.mainTitle}
                subTitle={sectionData.subTitle}
                description={sectionData.description}
                buttonText={sectionData.buttonText}
                imageSrc={imageSrc}
            />
    );
};

export default Home;