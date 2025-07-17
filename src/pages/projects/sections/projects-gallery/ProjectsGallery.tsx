import './ProjectsGallery.scss';

import type {FC} from 'react';
import TitleIconGroup from "@/components/title-icon-group/TitleIconGroup";
import logoImg from '../../../../components/title-icon-group/images/hard-skills.png'

import easetechImg from './images/easetech.png'
import easetechBgImg from './images/bg-images/easetech-ellipse.png'

import WebsiteTypography from "@/components/website-typography/WebsiteTypography";
import WebsiteButton from "@/components/website-button/WebsiteButton";
import WebsiteDivider from "@/components/website-divider/WebsiteDivider";
const {Title, Paragraph} = WebsiteTypography

const ProjectsGallery: FC = () => {
    return (
        <div className={'projects-gallery-wrapper'}>
            <div className={'container'}>

                <TitleIconGroup content={{title: 'My Projects', image: logoImg}}/>

                <div className={'gallery-wrapper'}>

                    <div className={'upper-bg-img-wrapper'}>
                        <img src={easetechBgImg} alt={"background illustration"}/>
                    </div>

                    <div className={'project-item-wrapper'}>

                        <div className={'project-content-wrapper'}>
                          <div className={'text-box'}>
                              <Title level={2} color={'primary'} style={{paddingBottom: 16, paddingTop: 150}}>
                                  {'Easetech'}
                              </Title>

                              <Paragraph color={'primary'} >
                                  {'Development of a modern platform that facilitates document and wayleave workflows between organizations and clients. The system includes user registration, quote requests, document handling, and geospatial data interactions.'}
                              </Paragraph>
                          </div>

                            <div>
                                <WebsiteButton btnType={'ghost'} size={'large'} text={'Read more'}/>
                            </div>
                        </div>

                        <div className={'project-img-wrapper'}>
                            <img src={easetechImg} alt={'screenshot of project website'}/>
                        </div>
                    </div>

                    <div className={'lower-bg-img-wrapper'}></div>

                    <WebsiteDivider />

                </div>
            </div>
        </div>
    );
};

export default ProjectsGallery;