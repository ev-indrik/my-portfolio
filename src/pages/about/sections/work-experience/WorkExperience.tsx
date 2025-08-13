import type {FC} from 'react';
import './WorkExperience.scss'

import bgLeaves from './images/bg-leaves.png'
import titleImg from "@/pages/about/sections/work-experience/images/clock-img.png";
import TitleIconGroup from "@/components/title-icon-group/TitleIconGroup";
import ExperienceCard from "@/pages/about/sections/work-experience/experience-card/ExperienceCard";


const experienceList = [
    {
        title: '2025 – now',
        description: 'Frontend Developer (intern)\nPritster Holdings (Pty) Ltd t/a Groundwork Solutions',
    },
    {
        title: '2015–2019',
        description: 'Freelance/Remote Work\nSMM, Website Administration, Moderator, Project Assistant',
    },
    {
        title: '2010–2015',
        description: 'AdPro Ad Agency\nFreelance: Moderator, Content Writer, Online Support',
    },
    {
        title: '2008–2009',
        description: 'Arika-Ltd LLC\n Sales Manager, Translator',
    },
    {
        title: '2006–2008',
        description: 'Pride Media Publishing House\n Executive Secretary',
    },
];

const WorkExperience: FC = () => {
    return (
        <div className={'work-experience-wrapper'}>
            <div className={'container'}>

               <div className={'experience-table-wrapper'}>

                   <div className={'bg-img-wrapper'}>
                       <img src={bgLeaves} alt={"background illustration"}/>
                   </div>

                   <TitleIconGroup content={{title: 'My Work Experience', image: titleImg}} marginBottom={'-30px'}/>

                   <div className={'experiences-box'}>

                       {experienceList.map((item, index) => (
                           <ExperienceCard
                               key={index}
                               isEven={index % 2 === 1}
                               title={item.title}
                               description={item.description}
                           />
                       ))}
                   </div>
               </div>

            </div>
        </div>
    );
};

export default WorkExperience;