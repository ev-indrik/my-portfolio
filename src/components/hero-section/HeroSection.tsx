import './HeroSection.scss';

import {type FC} from 'react';
import {Col, Row} from "antd";

import WebsiteButton from "../website-button/WebsiteButton.tsx";
import type {WebsiteButtonType} from "../website-button/WebsiteButton"
import SocialButtons from "../social-buttons/SocialButtons.tsx";
import TextListItem from "../text-list-item/TextListItem";

import WebsiteTypography from "@/components/website-typography/WebsiteTypography";
import {SvgIcon} from "@/components/icon/SvgIcon";
import type {IconTypes} from "@/components/icon/SvgIcon";

const {Title, Paragraph} = WebsiteTypography;

type HeroSectionProps = {
    mainTitle: string;
    titleColor?: 'primary' | 'black' | 'white';
    subTitle?: string;
    description: string | string[];
    imageSrc: string;
    btnType?: WebsiteButtonType;
    buttonText?: string;
    buttonLink?: string;
    isMainButton?: boolean;
    isSocialButtons?: boolean;
    isReversed?: boolean;
    isBgImg?: boolean;
    bgImg?: string;
    spanNumber?: number;
    svgType?: IconTypes;
    paddingBtm?: number;
    onClick?: () => void;
    isDisabled?: boolean;
};

const HeroSection: FC<HeroSectionProps> = ({
                                               mainTitle,
                                               titleColor = 'black',
                                               subTitle,
                                               description,
                                               btnType = 'primary',
                                               buttonText,
                                               imageSrc,
                                               isSocialButtons = false,
                                               isMainButton = true,
                                               isReversed = false,
                                               isBgImg = false,
                                               bgImg,
                                               spanNumber = 8,
                                               svgType,
                                               paddingBtm,
                                               onClick,
                                               isDisabled = false
                                           }) => {


    return (
        <div className={'hero-section-wrapper'} style={{paddingBottom: paddingBtm}}>
            <div className={'container'}>

                {isBgImg &&
                    <div className={'hero-section-bg-wrapper'}>
                        <img src={bgImg} alt={"background illustration"}/>
                    </div>}

                <Row wrap={false} gutter={24} className={'hero-section-content-wrapper'}>

                    <Col
                        span={spanNumber}
                        className={'texts-container'}
                        order={isReversed ? 2 : 1}
                    >
                        <Title level={2} color={titleColor}
                               style={{paddingBottom: subTitle ? 2 : 24}}>{mainTitle}</Title>

                        {subTitle && <Title level={3} style={{paddingBottom: 24}}>{subTitle}</Title>}

                        {Array.isArray(description) ? (
                            description.map((item, index) => (
                                <TextListItem key={index} text={item}/>
                            ))
                        ) : (
                            <Paragraph>{description}</Paragraph>
                        )}


                        {isMainButton && (<Row justify={isReversed ? 'end' : 'start'} style={{paddingTop: 64}}>
                            {svgType ? <WebsiteButton
                                    btnType={btnType}
                                    icon={<SvgIcon type={svgType as IconTypes}/>}
                                    text={buttonText}
                                    size={'large'}
                                    onClick={onClick}
                                    disabled={isDisabled}
                                /> :
                                <WebsiteButton
                                    btnType={btnType}
                                    text={buttonText}
                                    size={'large'}
                                    onClick={onClick}
                                    disabled={isDisabled}
                                />}
                        </Row>)}

                        {isSocialButtons && <SocialButtons/>}

                    </Col>

                    <Col flex={'auto'} order={isReversed ? 1 : 2}>
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