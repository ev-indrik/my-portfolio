import type {FC} from 'react';
import './WorkExperience.scss'

import bgLeaves from './images/bg-leaves.png'
import titleImg from "@/pages/about/sections/work-experience/images/clock-img.png";
import TitleIconGroup from "@/components/title-icon-group/TitleIconGroup";

const WorkExperience: FC = () => {
    return (
        <div className={'work-experience-wrapper'}>

            <div className={'bg-img-wrapper'}>
                <img src={bgLeaves} alt={"background illustration"}/>
            </div>

            <div className={'container'}>

                <TitleIconGroup content={{ title: 'My Work Experience', image: titleImg }} marginBottom={'-30px'} />

            </div>
        </div>
    );
};

export default WorkExperience;