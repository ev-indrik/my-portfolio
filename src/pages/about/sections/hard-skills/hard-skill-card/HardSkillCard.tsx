import './HardSkillCard.scss'

import {type FC} from 'react';
import WebsiteTypography from "@/components/website-typography/WebsiteTypography";

import type {hardSkillsType} from "@/type/types";
import hardSkillImages from "@/pages/about/sections/hard-skills/hard-skill-card/hardSkillImages";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";

const {Title, Paragraph} = WebsiteTypography;

type Props = {
    content: hardSkillsType
}

const HardSkillCard: FC<Props> = ({content}) => {

    const {xxl, xl, lg, md, sm} = useBreakpoint()
    const {id, image, title, paragraph, isLogoStandsAlone} = content
    const imageSrc = hardSkillImages[image];

    if (isLogoStandsAlone && (xxl || xl || lg || md)) {
        return (
            <div className={`hard-skill-item-wrapper ${id} alone-logo`}>

                <div className={'logo-img-wrapper'}>
                    <img src={imageSrc} alt={`${title} logo`}/>
                </div>

                <div className={'content-alone-logo-wrapper'} style={{width: '100%'}}>

                    <div className={'skill-title-box'}>
                        <Title level={3}>
                            {title}
                        </Title>
                    </div>

                    <Paragraph>
                        {paragraph.split('\n').map((line, index) => (
                            <span key={index}>
                        {line}
                                <br/>
                    </span>
                        ))}
                    </Paragraph>
                </div>
            </div>
        )
    }

    return (
        <div className={`hard-skill-item-wrapper ${id}`}>
            <div className={'skill-title-box'}>
                <div className={'logo-img-wrapper'}>
                    <img src={imageSrc} alt={`${title} logo`}/>
                </div>
                <Title
                    level={(xxl || xl || lg || md || sm) ? 3 : 4}
                    style={{paddingLeft: (xxl || xl || lg) ? 16 : 8}}
                    centered={!(xxl || xl || lg || md || sm)}
                >
                    {title}
                </Title>
            </div>

            <Paragraph>
                {paragraph.split('\n').map((line, index) => (
                    <span key={index}>
                        {line}
                        <br/>
                    </span>
                ))}
            </Paragraph>
        </div>
    );
};


export default HardSkillCard;