import type {FC} from 'react';
import {useState} from 'react';

import WebsiteTypography from "@/components/website-typography/WebsiteTypography";
import WebsiteButton from "@/components/website-button/WebsiteButton";

const {Paragraph} = WebsiteTypography;

type Props = {
    text?: string;
    maxLength?: number;
};

const ReadMoreComponent: FC<Props> = ({text, maxLength = 600}) => {
    if (!text) return null;

    const [expanded, setExpanded] = useState(false);
    const isLongText = text.length > maxLength;

    const visibleText = expanded ? text : text.slice(0, maxLength) + (isLongText ? '...' : '');

    const toggleExpanded = () => {
        setExpanded((prev) => !prev);
    };

    return (
        <Paragraph
            centered
            color="primary"
            style={{whiteSpace: 'pre-line'}}
        >
            {visibleText}
            {isLongText && (

                <WebsiteButton
                    btnType={'ghost'}
                    text={expanded ? 'Hide description' : 'Read full description'}
                    style={{
                        width: '30%',
                        margin: '24px auto 0',
                        color: '#2E527D',
                        cursor: 'pointer',
                        fontWeight: 600,
                        border: '1px solid #83A9D5',
                        borderRadius: 11,
                        padding: '10px 6px',
                    }}
                    onClick={toggleExpanded}
                />
            )}
        </Paragraph>
    );
};

export default ReadMoreComponent;
