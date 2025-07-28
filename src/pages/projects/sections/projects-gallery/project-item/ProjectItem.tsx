import './ProjectItem.scss'

import type {FC} from 'react';
import WebsiteButton from "@/components/website-button/WebsiteButton";
import WebsiteDivider from "@/components/website-divider/WebsiteDivider";

import WebsiteTypography from "@/components/website-typography/WebsiteTypography";
import {useNavigate} from "react-router";
import type {ProjectItemType} from "@/type/types";

const {Title, Paragraph} = WebsiteTypography


const ProjectItem: FC<ProjectItemType> = ({id, isReversed, bgImgUpper, bgImgLower, title, description, projectImgs, isDivider, bgSectionImg}) => {

    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate(`/projects/${id}`)
    };

    return (
        <>
            <div id={id} className={`project-item-wrapper ${isReversed && 'reversed'}`}>

                {bgImgUpper && <div className={'upper-bg-img-wrapper'}>
                    <img src={bgImgUpper} alt={"background illustration"}/>
                </div>}

                <div className={'container'}>
                    <div className={`project-content-wrapper ${isReversed && "reversed"}`}>
                        <div className={`project-content ${isReversed && 'reversed'}`}>
                            <div className={`text-box ${isReversed && 'reversed'}`}>
                                <Title level={2} color={'primary'} style={{paddingBottom: 16, paddingTop: 150}}>
                                    {title}
                                </Title>

                                <Paragraph color={'primary'}>
                                    {description}
                                </Paragraph>
                            </div>

                            <div>
                                <WebsiteButton btnType={'ghost'} size={'large'} text={'Go to Project Page'}
                                               onClick={handleReadMore}/>
                            </div>
                        </div>

                        <div className={'project-img-wrapper'}>
                            <img src={projectImgs[0]} alt={'screenshot of project website'}/>
                        </div>
                    </div>
                    {isDivider && <WebsiteDivider isReversed={isReversed} paddingTop={64} paddingBottom={0}/>}
                </div>

                {bgImgLower && <div className={'lower-bg-img-wrapper'}>
                    <img src={bgImgLower} alt={"background illustration"}/>
                </div>}

                {bgSectionImg && <div className={'section-bg-wrapper'}>
                    <img src={bgSectionImg} alt={"background illustration"}/>
                </div>}
            </div>
        </>
    );
};

export default ProjectItem;