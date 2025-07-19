import './ProjectItem.scss'

import type {FC} from 'react';
import WebsiteButton from "@/components/website-button/WebsiteButton";
import WebsiteDivider from "@/components/website-divider/WebsiteDivider";

import WebsiteTypography from "@/components/website-typography/WebsiteTypography";

const {Title, Paragraph} = WebsiteTypography

type ProjectItemProps = {
    isReversed?: boolean;
    title: string;
    description: string;
    projectImg: string;
    onClick?: () => void;
    bgImgUpper?: string;
    bgImgLower?: string;
    bgSectionImg?: string;
    isDivider?: boolean;
    isDividerReversed?: boolean;
}

const ProjectItem: FC<ProjectItemProps> = ({
                                               isReversed = false,
                                               title,
                                               description,
                                               onClick,
                                               projectImg,
                                               isDivider = true,
                                               bgImgUpper,
                                               bgImgLower,
                                               bgSectionImg
                                           }) => {
    return (
        <>
            <div className={`project-item-wrapper ${isReversed && 'reversed'}`}>

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
                                <WebsiteButton btnType={'ghost'} size={'large'} text={'Read more'} onClick={onClick}/>
                            </div>
                        </div>

                        <div className={'project-img-wrapper'}>
                            <img src={projectImg} alt={'screenshot of project website'}/>
                        </div>
                    </div>
                    {isDivider && <WebsiteDivider isReversed={isReversed}/>}
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