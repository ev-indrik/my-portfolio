import type {FC} from 'react';
import './ExperienceCard.scss';

import WebsiteTypography from "@/components/website-typography/WebsiteTypography";

const {Title, Paragraph} = WebsiteTypography;

type Props = {
    isEven: boolean;
    title: string;
    description: string;
}

const ExperienceCard: FC<Props> = ({isEven, title, description}) => {
    return (
        <div className={`experience-item-wrapper ${isEven ? 'even' : ''}`}>
            <div className={`experience-content ${isEven ? 'even-content' : ''}`}>
                <Title level={3}>
                    {title}
                </Title>

                <Paragraph className={'paragraph-wrapper'}>
                    {description.split('\n').map((line, idx) => (
                        <span key={idx}>
                            {line}
                            <br/>
                        </span>
                    ))}
                </Paragraph>
            </div>
        </div>
    );
};

export default ExperienceCard;