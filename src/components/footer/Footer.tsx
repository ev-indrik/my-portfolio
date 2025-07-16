import {type FC} from 'react';

import './Footer.scss'
import {Col, Row, Space} from "antd";
import {Link} from "react-router";
import WebsiteButton from "../custom-button/WebsiteButton";
import {type IconTypes, SvgIcon} from "@/components/icon/SvgIcon";
import SocialButtons from '../social-buttons/SocialButtons';
import bgPetalsImg from './images/footer-petals-img.png';

import WebsiteTypography from "@/components/website-typography/WebsiteTypography";
const {Paragraph} = WebsiteTypography;

type ContactItem = {
    id: number;
    iconType: IconTypes;
    text: string;
}

const contactInfo: ContactItem[] = [
    {
        id: 1,
        iconType: 'geo',
        text: 'Kyiv, Ukraine',
    },
    {
        id: 2,
        iconType: 'tel',
        text: '+380683555848',
    },
    {
        id: 3,
        iconType: 'plane',
        text: 'ev.indrik',
    },
    {
        id: 4,
        iconType: 'git-small',
        text: 'ev-indrik',

    },
    {
        id: 5,
        iconType: 'at',
        text: 'delfinmur@gmail.com',
    },
]

const Footer: FC = () => {

    const startYear = 2025;
    const currentYear = new Date().getFullYear();
    const displayYear = currentYear > startYear ? `${startYear}-${currentYear}` : `${startYear}`;

    return (
        <div className={'footer-wrapper'}>
            <div className={'container'}>
                <Row justify={'space-between'} align={'stretch'} wrap={false} style={{paddingTop: 32, paddingBottom: 16}}>
                    <Col span={6}>
                            <Space direction={'vertical'} size={'middle'} style={{paddingBottom: 20}}>
                                <Paragraph color={'white'} size={'lg'}>{'Menu'}</Paragraph>
                                <Link to="/home">{'Home'}</Link>
                                <Link to="/about">{'About'}</Link>
                                <Link to="/projects">{'Projects'}</Link>
                            </Space>
                            <SocialButtons/>
                    </Col>
                    <Col span={6}>
                        <Paragraph color={'white'} size={'lg'}>{'Contact info'}</Paragraph>
                        <Space direction={'vertical'} style={{paddingTop: 15}}>
                            {contactInfo.map((it) =>
                                <div key={it.id} className={'contact-item-box'}>
                                    <SvgIcon type={it.iconType}/>
                                    <Paragraph color={'white'} style={{paddingLeft: 12}}>{it.text}</Paragraph>
                                </div>
                            )}
                        </Space>
                    </Col>
                    <Col span={6}>
                        <Row justify={'end'} align={'bottom'} style={{height: '100%', paddingBottom: 16}}>
                            <WebsiteButton btnType={'secondary'} size={'large'} text={'Contact Form'}/>
                        </Row>
                    </Col>
                </Row>

                <Row className={'signature-container'} justify={'center'} style={{paddingTop: 16}}>
                    <Paragraph color={'white'}>
                        {'Coded by '}
                        <a href={"https://github.com/ev-indrik"} target="_blank"
                           rel="noopener noreferrer">
                            {'©ev-indrik'}
                        </a>{' '}
                        {displayYear}
                    </Paragraph>
                </Row>
            </div>

            <div className={'footer-img-wrapper'}>
                <img src={bgPetalsImg} alt={"illustration"}/>
            </div>

        </div>
    );
};

export default Footer;