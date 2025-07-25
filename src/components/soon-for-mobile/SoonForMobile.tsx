import './SoonForMobile.scss';

import type {FC} from 'react';
import {Row, Col, Space} from "antd";
import {SvgIcon} from "@/components/icon/SvgIcon";

import WebsiteTypography from "@/components/website-typography/WebsiteTypography";
import WebsiteButton from "@/components/website-button/WebsiteButton";

const {Title, Paragraph} = WebsiteTypography
import profileImg from './images/jane-portrait.png';
import WebsiteDivider from "@/components/website-divider/WebsiteDivider";
import {contactInfo} from "@/components/footer/Footer";

const SoonForMobile: FC = () => {

    const onPdfClick = () => {
        const link = document.createElement('a');
        link.href = '/2025_cv_ev-indrik.pdf';
        link.download = 'cv-yevheniia.pdf'; // naming on save
        link.click();
    }

    return (
        <div className={'soon-for-mobile-wrapper'}>
            <div className={'container'}>

                <Row justify={'center'}>
                    <Col span={14}>

                        <Row justify={'center'} style={{width: "100%"}}>

                            <Col style={{paddingBottom: 40}}>
                                <div className={'soon-logo-wrapper'}>
                                    <SvgIcon type={'white-whale'}/>
                                </div>
                            </Col>

                            <Col span={24} style={{paddingBottom: 24}}>
                                <Title level={2} color={'white'} centered>
                                    {'Mobile Version Coming Soon...'}
                                </Title>
                            </Col>

                            <Paragraph
                                color={'white'}
                                centered
                            >
                                {'Thank you for visiting!\nI am currently working on optimizing my website for mobile devices to give you the best possible experience.\n\nIn the meantime, I recommend accessing the site from a desktop or laptop.'}
                            </Paragraph>

                            <Row justify={'center'} style={{width: '100%', paddingTop: 32}}>
                                <Col span={14}>
                                    <WebsiteButton
                                        btnType={'white-ghost'}
                                        icon={<SvgIcon type={'pdf'}/>}
                                        text={'Download PDF Resume'}
                                        onClick={onPdfClick}
                                        block
                                    />
                                </Col>
                            </Row>

                            <Row justify={'center'} style={{width: '100%'}}>
                                <Col span={24} style={{paddingTop: 40}}>
                                    <div className={'soon-image-wrapper'}>
                                        <img src={profileImg} alt={"illustration of developer coding with cats"}/>
                                    </div>
                                </Col>

                                <Col span={24} style={{paddingTop: 32}}>
                                    <Paragraph
                                        color={"white"}
                                        centered
                                    >
                                        {'I really appreciate your patience — the mobile version will be available shortly!'}
                                    </Paragraph>
                                </Col>
                            </Row>

                        </Row>

                    </Col>

                    <Col span={24}>
                        <WebsiteDivider color={'white'}/>
                    </Col>

                   <Row justify={'center'} style={{width: '100%'}}>
                       <Col>
                           <Space direction={'vertical'} style={{width: '100%'}}>
                               <Paragraph color={'white'} size={'lg'} weight={'w700'} style={{paddingBottom: 16}}>{'Contact info'}</Paragraph>
                               {contactInfo.map((it) =>
                                   <div key={it.id} className={'contact-item-box'} style={{paddingBottom: 2}}>
                                       <SvgIcon type={it.iconType}/>
                                       <Paragraph color={'white'} style={{paddingLeft: 12}}>{it.text}</Paragraph>
                                   </div>
                               )}
                           </Space>
                       </Col>
                   </Row>

                </Row>


            </div>
        </div>
    );
};

export default SoonForMobile;

