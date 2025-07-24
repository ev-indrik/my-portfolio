import './ContactItem.scss'

import type {FC} from 'react';

import WebsiteTypography from "@/components/website-typography/WebsiteTypography";
const {Paragraph} = WebsiteTypography;

export type ContactItemType = {
    imgUrl: string;
    title: string;
    description: string;
}

type ContactItemProps = {
    content: ContactItemType
}

const ContactItem: FC<ContactItemProps> = ({content}) => {
    return (

            <div className={'contacts-item-wrapper'}>
                <div className={'contacts-item-content'}>

                    <div className={'icon-group-wrapper'}>
                        <div className={'contacts-img-wrapper'}>
                            <img src={content.imgUrl} alt={"contact icon image"}/>
                        </div>

                        <Paragraph>{content.title}</Paragraph>
                    </div>

                    <div className={'text-box'}>
                        <Paragraph weight={'w600'}>{content.description}</Paragraph>
                    </div>

                </div>
            </div>

    );
};

export default ContactItem;