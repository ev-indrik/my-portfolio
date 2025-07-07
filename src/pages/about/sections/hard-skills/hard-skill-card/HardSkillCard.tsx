import './HardSkillCard.scss'

import {type FC} from 'react';
import WebsiteTypography from "@/components/website-typography/WebsiteTypography";

import type {hardSkillsType} from "@/type/types";
import hardSkillImages from "@/pages/about/sections/hard-skills/hard-skill-card/hardSkillImages";

const {Title, Paragraph} = WebsiteTypography;

type Props = {
    content: hardSkillsType
}

const HardSkillCard: FC<Props> = ({ content }) => {

    const { id, image, title, paragraph, isLogoStandsAlone } = content
    const imageSrc = hardSkillImages[image];

    if (isLogoStandsAlone) {
        return <h2>Hello world</h2>;
    }

    return (
        <div className={`hard-skill-item-wrapper ${id}`}>
            <div className={'skill-title-box'}>
                <div className={'logo-img-wrapper'}>
                    <img src={imageSrc} alt={`${title} logo`} />
                </div>
                <Title
                    level={3}
                    style={{ paddingLeft: 16 }}
                >
                    {title}
                </Title>
            </div>

            <Paragraph>
                {paragraph.split('\n').map((line, index) => (
                    <span key={index}>
                        {line}
                        <br />
                    </span>
                ))}
            </Paragraph>
        </div>
    );
};


export default HardSkillCard;