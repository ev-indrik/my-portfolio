import './ProjectItem.scss'

import type {FC} from 'react';
import WebsiteButton from "@/components/website-button/WebsiteButton";
import WebsiteDivider from "@/components/website-divider/WebsiteDivider";

import WebsiteTypography from "@/components/website-typography/WebsiteTypography";
import {useNavigate} from "react-router";
import type {ProjectItemType} from "@/type/types";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";

const {Title, Paragraph} = WebsiteTypography


const ProjectItem: FC<ProjectItemType> = ({
                                              id,
                                              isReversed,
                                              bgImgUpper,
                                              bgImgLower,
                                              title,
                                              description,
                                              projectImgs,
                                              isDivider,
                                              bgSectionImg
                                          }) => {

    const navigate = useNavigate();
    const {xxl, xl, lg, md, sm} = useBreakpoint()

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

                        {!(xxl || xl || lg || md) && <div className={'project-img-wrapper'}>
                            <img src={projectImgs[0]} alt={'screenshot of project website'}/>
                        </div>
                        }

                        <div className={`project-content ${isReversed && 'reversed'}`}>
                            <div className={`text-box ${isReversed && 'reversed'}`}>
                                <Title level={(xxl || xl || lg || md || sm) ? 2 : 3} color={'primary'} centered={!(xxl || xl || lg || md)}
                                       style={{paddingBottom: 16, paddingTop: (xxl || xl || lg || md) ? 150 : 24 }}>
                                    {title}
                                </Title>

                                <Paragraph
                                    color={'primary'}
                                    centered={!(xxl || xl || lg || md)}
                                    style={{paddingBottom: !(xxl || xl || lg || md) ? 32 : 0}}
                                >
                                    {description}
                                </Paragraph>
                            </div>

                            <div>
                                <WebsiteButton btnType={'ghost'} size={'large'} text={'Go to Project Page'}
                                               onClick={handleReadMore}/>
                            </div>
                        </div>

                        {(xxl || xl || lg || md) && <div className={'project-img-wrapper'} style={{border: '1px solid green'}}>
                            <img src={projectImgs[0]} alt={'screenshot of project website'}/>
                        </div>
                        }

                    </div>
                    {isDivider && <WebsiteDivider isReversed={isReversed} paddingTop={(xxl || xl || lg || md) ? 64 : 24} paddingBottom={(xxl || xl || lg || md) ? 0 : 24}/>}
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