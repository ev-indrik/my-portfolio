import './SoonForMobile.scss';

import {type FC} from 'react';
import {Row, Col} from "antd";
import {SvgIcon} from "@/components/icon/SvgIcon";

import WebsiteTypography from "@/components/website-typography/WebsiteTypography";
import WebsiteButton from "@/components/website-button/WebsiteButton";

import profileImg from './images/jane-portrait.png';
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import {useNavigate} from "react-router";

const {Title, Paragraph} = WebsiteTypography

const SoonForMobile: FC = () => {

    const {xxl, xl, lg, md, sm} = useBreakpoint()
    const navigate = useNavigate()

    const onHomeClick = () => {
        navigate('/home')
    }

    return (
        <div className={'soon-for-mobile-wrapper'}>
            <div className={'container'}>

                <Row justify={'center'}>
                    <Col xxl={16} xl={16} lg={16} md={16} sm={22} xs={24}>

                        <Row justify={'center'} style={{width: "100%"}}>

                            <Col style={{paddingBottom: 40}}>
                                <div className={'soon-logo-wrapper'}>
                                    <SvgIcon type={'white-whale'}/>
                                </div>
                            </Col>

                            <Col span={24} style={{paddingBottom: 24}}>
                                <Title level={(xxl || xl || lg || md || sm ? 2 : 3)} color={'white'} centered>
                                    {'Mobile Version Coming Soon...'}
                                </Title>
                            </Col>

                            <Paragraph
                                color={'white'}
                                centered
                            >
                                {'Thank you for visiting!\nI am currently working on optimizing my website for mobile devices to give you the best possible experience.\n\nIn the meantime, I recommend accessing the site from a desktop or laptop.'}
                            </Paragraph>

                            <Row justify={'center'} align={'middle'} style={{width: '100%', paddingTop: 32}}>
                                <Col span={14} md={14} sm={16} xs={24}>
                                        <WebsiteButton
                                            btnType={'white-ghost'}
                                            icon={<SvgIcon type={'plane'} color={'white'}/>}
                                            text={'Back to Home page'}
                                            onClick={onHomeClick}
                                            block
                                        />
                                </Col>
                            </Row>

                            <Row justify={'center'} style={{width: '100%'}}>
                                <Col span={24} style={{paddingTop: 40}}>
                                    <Row justify={'center'}>
                                        <div className={'soon-image-wrapper'}>
                                            <img src={profileImg} alt={"illustration of developer coding with cats"}/>
                                        </div>
                                    </Row>
                                </Col>

                                <Col span={24} style={{paddingTop: 32}}>
                                    <Paragraph
                                        color={"white"}
                                        centered
                                    >
                                        {'I really appreciate your patience. The mobile version will be available shortly!'}
                                    </Paragraph>
                                </Col>
                            </Row>
                        </Row>
                    </Col>
                </Row>

            </div>
        </div>
    );
};

export default SoonForMobile;

