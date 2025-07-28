import './TechLogoItem.scss'

import type {FC} from 'react';

import WebsiteTypography from "@/components/website-typography/WebsiteTypography";
const {Title} = WebsiteTypography

import antdImg from '../../pages/about/sections/hard-skills/hard-skill-card/logos/antd.png';
import cssImg from '../../pages/about/sections/hard-skills/hard-skill-card/logos/css.png';
import htmlImg from '../../pages/about/sections/hard-skills/hard-skill-card/logos/html.png';
import jsImg from '../../pages/about/sections/hard-skills/hard-skill-card/logos/js.png';
import reactImg from '../../pages/about/sections/hard-skills/hard-skill-card/logos/react.png';
import sassImg from '../../pages/about/sections/hard-skills/hard-skill-card/logos/sass.png';
import strapiImg from '../../pages/about/sections/hard-skills/hard-skill-card/logos/strapi.png';
import tsImg from '../../pages/about/sections/hard-skills/hard-skill-card/logos/ts.png';
import mapboxImg from '../../pages/about/sections/hard-skills/hard-skill-card/logos/mapbox.png';
import hubspotImg from '../../pages/about/sections/hard-skills/hard-skill-card/logos/hubspot.png';

type TechImageKey =
    | 'antdImg'
    | 'cssImg'
    | 'htmlImg'
    | 'jsImg'
    | 'reactImg'
    | 'sassImg'
    | 'strapiImg'
    | 'tsImg'
    | 'mapboxImg'
    | 'hubspotImg';

const techImages: Record<TechImageKey, string> = {
    antdImg,
    cssImg,
    htmlImg,
    jsImg,
    reactImg,
    sassImg,
    strapiImg,
    tsImg,
    mapboxImg,
    hubspotImg
};

type LogoTitle = 'AntDesign' | 'Sass/Less' | 'HTML' | 'JavaScript' | 'React' | 'CSS' | 'Strapi' | 'TypeScript' | 'HubSpot' | 'MapBox';

export type TechContent = {
    logoKey: TechImageKey;
    title: LogoTitle;
}

const TechLogoItem: FC<TechContent> = ({logoKey, title}) => {
    return (
        <div className={'tech-pair-wrapper'}>
            <div className={'tech-logo-wrapper'}>
                <img src={techImages[logoKey]} alt={"tech logo"}/>
            </div>
            <Title level={4}>{title}</Title>
        </div>
    );
};

export default TechLogoItem;