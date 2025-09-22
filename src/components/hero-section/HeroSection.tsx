import './HeroSection.scss';

import {useRef, useEffect} from 'react';
import {type FC} from 'react';
import {Col, Row} from "antd";

import Lottie from 'lottie-react';
import type {LottieRefCurrentProps} from 'lottie-react';

import WebsiteButton from "../website-button/WebsiteButton.tsx";
import type {WebsiteButtonType} from "../website-button/WebsiteButton"
import SocialButtons from "../social-buttons/SocialButtons.tsx";
import TextListItem from "../text-list-item/TextListItem";

import WebsiteTypography from "@/components/website-typography/WebsiteTypography";
import {SvgIcon} from "@/components/icon/SvgIcon";
import type {IconTypes} from "@/components/icon/SvgIcon";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";

const {Title, Paragraph} = WebsiteTypography;

type BgImagePosition = {
    width?: number | string;
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
};

type bgImage = {
    image: string;
    desktop?: BgImagePosition;
    mobile?: BgImagePosition;
};

type HeroSectionProps = {
    mainTitle: string;
    titleColor?: 'primary' | 'black' | 'white';
    subTitle?: string;
    description: string | string[];
    imageSrc?: string;
    isImgMirrored?: boolean;
    animationSrc?: object;
    animationBgSrc?: object;
    btnType?: WebsiteButtonType;
    buttonText?: string;
    buttonLink?: string;
    isMainButton?: boolean;
    isSocialButtons?: boolean;
    isReversed?: boolean;
    spanNumber?: number;
    svgType?: IconTypes;
    paddingBtm?: number;
    onClick?: () => void;
    isDisabled?: boolean;
    offsetNumber?: number;
    imgPaddingBottom?: number;
    bgImg?: bgImage;
};

const HeroSection: FC<HeroSectionProps> = ({
                                               mainTitle,
                                               titleColor = 'primary',
                                               subTitle,
                                               description,
                                               btnType = 'primary',
                                               buttonText,
                                               imageSrc,
                                               isImgMirrored,
                                               animationSrc,
                                               animationBgSrc,
                                               isSocialButtons = false,
                                               isMainButton = true,
                                               isReversed = false,
                                               bgImg,
                                               spanNumber = 10,
                                               svgType,
                                               paddingBtm,
                                               onClick,
                                               isDisabled = false,
                                               offsetNumber,
                                               imgPaddingBottom
                                           }) => {

    const {xxl, xl, lg, md} = useBreakpoint()
    const isDesktop = xxl || xl || lg || md;

    const lottieRef = useRef<LottieRefCurrentProps>(null);

    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.setSpeed(0.5);
        }
    }, []);


    return (
        <div className={'hero-section-wrapper'} style={{paddingBottom: paddingBtm}}>
            <div className={'container'}>

                {(bgImg && !animationSrc) &&
                    <div
                        className={'hero-section-bg-wrapper'}
                        style={isDesktop ? bgImg?.desktop : bgImg?.mobile}
                    >
                        <img src={bgImg.image} alt={"background illustration"}/>
                    </div>}

                <Row
                    wrap={!isDesktop}
                    gutter={[24, 32]}
                    className={'hero-section-content-wrapper'}
                    justify={isDesktop ? undefined : 'center'}
                    style={{paddingBottom: 16}}
                >
                    <Col
                        xxl={spanNumber} xl={spanNumber + 1} lg={spanNumber + 1} md={spanNumber + 1} sm={20} xs={24}
                        className={'texts-container'}
                        order={isReversed ? 2 : 1}
                    >
                        {animationBgSrc && <div className={'texts-section-bg-wrapper'}>
                            <Lottie
                                lottieRef={lottieRef}
                                animationData={animationBgSrc}
                                loop
                                autoplay
                            />
                        </div>}

                        <Title
                            level={isDesktop ? 2 : 3}
                            color={titleColor}
                            style={{paddingBottom: subTitle ? 2 : 24}}
                            centered={!isDesktop}
                        >
                            {mainTitle}
                        </Title>

                        {subTitle && <Title level={isDesktop ? 3 : 4} style={{paddingBottom: 24}}
                                            centered={!isDesktop}>{subTitle}</Title>}

                        {Array.isArray(description) ? (
                            description.map((item, index) => (
                                <TextListItem key={index} text={item}/>
                            ))
                        ) : (
                            <Paragraph centered={!isDesktop}>{description}</Paragraph>
                        )}


                        {isMainButton && (<Row justify={isReversed ? 'end' : 'start'} style={{paddingTop: 64}}>
                            {svgType ? <WebsiteButton
                                    btnType={btnType}
                                    icon={<SvgIcon type={svgType as IconTypes}
                                                   color={svgType === 'pdf' ? 'orange' : 'primary'}/>}
                                    text={buttonText}
                                    size={'large'}
                                    onClick={onClick}
                                    block={!isDesktop}
                                    disabled={isDisabled}
                                /> :
                                <WebsiteButton
                                    btnType={btnType}
                                    text={buttonText}
                                    size={'large'}
                                    onClick={onClick}
                                    block={!isDesktop}
                                    disabled={isDisabled}
                                />}
                        </Row>)}

                        {isSocialButtons && <SocialButtons/>}

                    </Col>

                    <Col
                        order={isReversed ? 1 : 2}
                        offset={isDesktop ? offsetNumber : 0}
                        flex={isDesktop ? 'auto' : undefined}
                        sm={20}
                        xs={24}
                    >
                        <Row
                            justify={'end'}
                            // align={'bottom'}
                            style={{height: '100%', paddingBottom: isDesktop ? 0 : 42}}
                        >
                            <div
                                className={
                                    animationSrc
                                        ? "section-animation-wrapper"
                                        : isImgMirrored
                                            ? "image-container mirrored"
                                            : "image-container"
                                }
                                style={{paddingBottom: imgPaddingBottom}}
                            >
                                {imageSrc && <img src={imageSrc} alt="illustration of developer"/>}

                                {animationSrc && (
                                    <div className={'animation-wrapper'}>
                                        <Lottie
                                            animationData={animationSrc}
                                            loop
                                            autoplay
                                            className={'lottie-animation'}
                                        />

                                        {bgImg?.image && (
                                            <div className={'animation-bg-img'}>
                                                <img src={bgImg.image} alt={"abstract illustration"}/>
                                            </div>
                                        )}

                                    </div>
                                )}
                            </div>

                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default HeroSection;