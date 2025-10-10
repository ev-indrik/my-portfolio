import './ProjectItem.scss'

import type {FC} from 'react';
import WebsiteButton from "@/components/website-button/WebsiteButton";
import WebsiteDivider from "@/components/website-divider/WebsiteDivider";

import WebsiteTypography from "@/components/website-typography/WebsiteTypography";
import {useNavigate} from "react-router";
import type {ProjectItemType} from "@/type/types";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";

const {Title, Paragraph} = WebsiteTypography

type Props = {
    it: ProjectItemType,
    bgImgUpper: string | undefined,
    bgImgLower: string | undefined,
    bgSectionImg: string | undefined,
}

const ProjectItem: FC<Props> = ({it, bgImgUpper, bgImgLower, bgSectionImg}) => {

    const navigate = useNavigate();
    const {xxl, xl, lg, md, sm} = useBreakpoint()

    const handleReadMore = () => {
        navigate(`/projects/${it.id}`)
    };

    console.log(it.title, it.imagePosition)

    return (
        <>
            <div id={it?.id} className={`project-item-wrapper ${it?.isReversed && 'reversed'}`}>

                {bgImgUpper && <div className={'upper-bg-img-wrapper'}>
                    <img src={bgImgUpper} alt={"background illustration"}/>
                </div>}

                <div className={'container'}>
                    <div className={`project-content-wrapper ${it?.isReversed && "reversed"}`}>

                        {!(xxl || xl || lg || md) && <div className={`project-img-wrapper ${it?.imagePosition ? `pos-${it?.imagePosition}` : ''}`}>
                            <img src={it?.projectImgs[0]} alt={'screenshot of project website'}/>
                        </div>
                        }

                        <div className={`project-content ${it?.isReversed && 'reversed'}`}>
                            <div className={`text-box ${it?.isReversed && 'reversed'}`}>
                                <Title level={(xxl || xl || lg || md || sm) ? 2 : 3} color={'primary'}
                                       centered={!(xxl || xl || lg || md)}
                                       style={{paddingBottom: 16, paddingTop: (xxl || xl || lg || md) ? 150 : 24}}>
                                    {it?.title}
                                </Title>

                                <Paragraph
                                    color={'primary'}
                                    centered={!(xxl || xl || lg || md)}
                                    style={{paddingBottom: !(xxl || xl || lg || md) ? 32 : 0}}
                                >
                                    {it?.description}
                                </Paragraph>
                            </div>

                            <div>
                                <WebsiteButton btnType={'ghost'} size={'large'} text={'Go to Project Page'}
                                               onClick={handleReadMore}/>
                            </div>
                        </div>

                        {(xxl || xl || lg || md) &&
                            <div className={'project-img-wrapper'}>
                                <img
                                    src={it?.projectImgs[0]}
                                    alt={'screenshot of project website'}
                                />
                            </div>
                        }

                    </div>
                    {it?.isDivider && <WebsiteDivider isReversed={it?.isReversed} paddingTop={(xxl || xl || lg || md) ? 64 : 24}
                                                  paddingBottom={(xxl || xl || lg || md) ? 0 : 24}/>}
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