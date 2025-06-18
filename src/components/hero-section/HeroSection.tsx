import './HeroSection.scss';

import {type FC} from 'react';
import {Col, Row, Typography} from "antd";

import WebsiteButton from "../custom-button/WebsiteButton.tsx";
import SocialButtons from "../social-buttons/SocialButtons.tsx";

const {Title, Paragraph} = Typography;

type HeroSectionProps = {
    mainTitle: string;
    subTitle?: string;
    description: string;
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
                        <Title level={2}>{mainTitle}</Title>

                        {subTitle && <Title level={4}>{subTitle}</Title>}

                        <Paragraph>{description}</Paragraph>

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