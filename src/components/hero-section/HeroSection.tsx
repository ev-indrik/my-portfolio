import './HeroSection.scss';

import {type FC} from 'react';
import { Col, Row } from "antd";

import WebsiteButton from "../custom-button/WebsiteButton.tsx";
import SocialButtons from "../social-buttons/SocialButtons.tsx";
import TextListItem from "../text-list-item/TextListItem";

import WebsiteTypography from "@/components/website-typography/WebsiteTypography";

const {Title, Paragraph} = WebsiteTypography;

type HeroSectionProps = {
    mainTitle: string;
    subTitle?: string;
    description: string | string[];
    buttonText?: string;
    buttonLink?: string;
    isMainButton?: boolean;
    isSocialButtons?: boolean;
    imageSrc: string;
};

const HeroSection: FC<HeroSectionProps> = ({
                                               mainTitle,
                                               subTitle,
                                               description,
                                               buttonText,
                                               imageSrc,
                                               isSocialButtons = false,
                                               isMainButton = true,
                                           }) => {

    return (
        <div className={'hero-section-wrapper'}>

            <div className={'container'}>
                <Row wrap={false} gutter={24} className={'hero-section-content-wrapper'}>

                    <Col
                        span={8}
                        className={'texts-container'}
                    >
                        <Title level={2} style={{ paddingBottom: subTitle ? 2 : 24 }}>{mainTitle}</Title>

                        {subTitle && <Title level={3} style={{paddingBottom: 24}}>{subTitle}</Title>}

                        {Array.isArray(description) ? (
                            description.map((item, index) => (
                                <TextListItem key={index} text={item} />
                            ))
                        ) : (
                            <Paragraph>{description}</Paragraph>
                        )}


                        {isMainButton && (<Row style={{paddingTop: 50}}>
                            <WebsiteButton btnType={'primary'} text={buttonText} size={'large'}/>
                        </Row>)}

                        {isSocialButtons && <SocialButtons/>}

                    </Col>

                    <Col flex={'auto'}>
                        <Row justify={'end'} align={'bottom'} style={{height: '100%'}}>
                            <div className={'image-container'}>
                                <img src={imageSrc} alt={'illustration of developer'}/>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default HeroSection;