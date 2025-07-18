import './HardSkills.scss'

import {type FC} from 'react';

import hardSkillsImg from '@/components/title-icon-group/images/hard-skills.png'

import HardSkillCard from "@/pages/about/sections/hard-skills/hard-skill-card/HardSkillCard";
import hardSkillContent from '../../../../data/hardSkilss.json'
import TitleIconGroup from "@/components/title-icon-group/TitleIconGroup";

import hardskillsPetals from './images/petals-skills.png';

const HardSkills: FC = () => {
    return (
        <div className={'hard-skills-wrapper '}>

            <div className={'hard-skills--bgimg-wrapper'}>
                <img src={hardskillsPetals} alt={"background illustration"}/>
            </div>

            <div className={'container'}>

                <TitleIconGroup content={{title: 'My hard skills', image: hardSkillsImg}}/>

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