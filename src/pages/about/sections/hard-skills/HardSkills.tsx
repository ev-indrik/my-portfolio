import './HardSkills.scss'

import {type FC} from 'react';

import hardSkillsImg from './images/hard-skills.png'

import WebsiteTypography from "@/components/website-typography/WebsiteTypography";
import HardSkillCard from "@/pages/about/sections/hard-skills/hard-skill-card/HardSkillCard";
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

                <HardSkillCard/>

                <div className={'skills-div-container'}>
                    <div className="card react">React</div>
                    <div className="card typescript">TypeScript</div>
                    <div className="card html">HTML</div>
                    <div className="card antd">Ant Design</div>
                    <div className="card javascript">JavaScript</div>
                    <div className="card sass">Sass</div>
                    <div className="card css">CSS</div>
                    <div className="card strapi">Strapi</div>
                </div>

            </div>
        </div>
    );
};

export default HardSkills;