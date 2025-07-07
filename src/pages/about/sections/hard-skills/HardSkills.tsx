import './HardSkills.scss'

import {type FC} from 'react';

import hardSkillsImg from './images/hard-skills.png'

import WebsiteTypography from "@/components/website-typography/WebsiteTypography";
import HardSkillCard from "@/pages/about/sections/hard-skills/hard-skill-card/HardSkillCard";
import hardSkillContent from '../../../../data/hardSkilss.json'
const {Title} = WebsiteTypography;

const HardSkills: FC = () => {
    return (
        <div className={'hard-skills-wrapper '}>
            <div className={'container'}>

                <div className={'title-box'}>
                    <div className={'hard-skills-img-wrapper'}>
                        <img src={hardSkillsImg} alt={'Engineering skills logo'}/>
                    </div>

                    <Title level={2}>{'My hard skills'}</Title>
                </div>

                <div className={'skills-div-container'}>
                {hardSkillContent.map((item) => (
                    <HardSkillCard key={item.id} content={item} />
                ))}
                </div>

            </div>
        </div>
    );
};

export default HardSkills;