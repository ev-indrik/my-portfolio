import type {FC} from 'react';
import './WorkExperience.scss'

import bgLeaves from './images/bg-leaves.png'
import titleImg from "@/pages/about/sections/work-experience/images/clock-img.png";
import TitleIconGroup from "@/components/title-icon-group/TitleIconGroup";
import WebsiteTypography from "@/components/website-typography/WebsiteTypography";

const {Title, Paragraph} = WebsiteTypography;

const WorkExperience: FC = () => {
    return (
        <div className={'work-experience-wrapper'}>
            <div className={'container'}>

                <div className={'bg-img-wrapper'}>
                    <img src={bgLeaves} alt={"background illustration"}/>
                </div>

                <TitleIconGroup content={{title: 'My Work Experience', image: titleImg}} marginBottom={'-30px'}/>

                <div className={'experiences-box'}>
                    <div className={'experience-item-wrapper'}>
                       <div className={'experience-content'}>
                           <Title level={3}>
                               {'2024 – now'}
                           </Title>

                           <Paragraph className={'paragraph-wrapper'}>{'Frontend Developer (trainee)\n' +
                               'Pritster Holdings (Pty) Ltd t/a Groundwork Solutions'}</Paragraph>
                       </div>
                    </div>

                    <div className={'experience-item-wrapper even'}>
                        <div className={'experience-content even-content'}>
                            <Title level={3}>
                                {'2024 – now'}
                            </Title>

                            <Paragraph className={'paragraph-wrapper'}>{'Frontend Developer (trainee)\n' +
                                'Pritster Holdings (Pty) Ltd t/a Groundwork Solutions'}</Paragraph>
                        </div>
                    </div>

                    <div className={'experience-item-wrapper'}>
                        <div className={'experience-content'}>
                            <Title level={3}>
                                {'2024 – now'}
                            </Title>

                            <Paragraph className={'paragraph-wrapper'}>{'Frontend Developer (trainee)\n' +
                                'Pritster Holdings (Pty) Ltd t/a Groundwork Solutions'}</Paragraph>
                        </div>
                    </div>

                    <div className={'experience-item-wrapper even'}>
                        <div className={'experience-content even-content'}>
                            <Title level={3}>
                                {'2024 – now'}
                            </Title>

                            <Paragraph
                                className={'paragraph-wrapper'}
                            >
                                {'Frontend Developer (trainee)\n' +
                                'Pritster Holdings (Pty) Ltd t/a Groundwork Solutions'}
                            </Paragraph>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default WorkExperience;