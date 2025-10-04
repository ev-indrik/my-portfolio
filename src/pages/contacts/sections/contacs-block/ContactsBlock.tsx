import './ContactsBlock.scss'

import type {FC} from 'react';

import bgImg from './images/leaves-bg-img.png'
import {Col, Row} from "antd";
import ContactItem from "@/pages/contacts/sections/contacs-block/contact-item/ContactItem";
import type {ContactItemType} from "@/pages/contacts/sections/contacs-block/contact-item/ContactItem";

import geoImg from './images/contacts-icons/geo-icon.png'
import emailImg from './images/contacts-icons/email-icon.png'
// import phoneImg from './images/contacts-icons/phone-icon.png'
import tImg from './images/contacts-icons/t-icon.png'
import viberImg from './images/contacts-icons/viber-icon.png'
import SocialButtons from "@/components/social-buttons/SocialButtons";
import WebsiteDivider from "@/components/website-divider/WebsiteDivider";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";

const contactsBlockContent: ContactItemType[] = [
    {
        imgUrl: geoImg,
        title: 'Location',
        description: 'Kyiv, Ukraine'
    },
    // {
    //     imgUrl: phoneImg,
    //     title: 'Mobile Phone',
    //     description: '+380 68 355 58 48'
    // },
    {
        imgUrl: viberImg,
        title: 'Viber/Phone',
        description: '+380 68 355 58 48'
    },
    {
        imgUrl: tImg,
        title: 'Telegram',
        description: '@ev.indrik'
    },
    {
        imgUrl: emailImg,
        title: 'Email',
        description: 'delfinmur@gmail.com'
    },
]

const ContactsBlock: FC = () => {

    const {xxl, xl, lg } = useBreakpoint()

    return (
        <div className={'contacts-block-wrapper'}>

            <div className={'contacts-block-bg-wrapper'}>
                <img src={bgImg} alt={"bg-illustration"}/>
            </div>
            <div className={'container'}>

                <Row justify={'center'}>
                    <Col
                        span={14}
                        xxl={14}
                        xl={14}
                        lg={14}
                        md={18}
                        sm={20}
                        xs={24}
                    >

                        <Row justify={'center'} className={'contacts-items-wrapper'}>
                            <Col span={24} style={{paddingLeft: (xxl||xl||lg) ? 80 : 10}}>

                                {contactsBlockContent.map((it, index) => (
                                    <ContactItem content={it} key={index}/>
                                ))}
                            </Col>
                        </Row>

                        <Row justify={'center'}>
                            <Col
                                span={8}
                                xxl={8}
                                xl={8}
                                lg={8}
                                md={10}
                                sm={14}
                                xs={18}
                            >
                                <SocialButtons color={'primary'}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <WebsiteDivider paddingBottom={50} paddingTop={50} />
            </div>
        </div>
    );
};

export default ContactsBlock;