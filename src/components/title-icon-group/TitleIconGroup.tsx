import type {FC} from 'react';
import './TitleIconGroup.scss'

import WebsiteTypography from "@/components/website-typography/WebsiteTypography";
const {Title} = WebsiteTypography

type content = {
    title: string
    image: string
}

type TitleIconGroupProps = {
    marginBottom?: string
    content: content
}

const TitleIconGroup: FC<TitleIconGroupProps> = ({content, marginBottom}) => {
    return (
        <div className={'title-box'}>
            <div className={'title-img-wrapper'} style={{marginBottom: `${marginBottom}`}}>
                <img src={content.image} alt={'Engineering skills logo'}/>
            </div>

            <Title level={2}>{content.title}</Title>
        </div>
    );
};

export default TitleIconGroup;