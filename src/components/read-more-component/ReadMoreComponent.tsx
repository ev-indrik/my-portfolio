import type {FC} from 'react';
import {useState} from 'react';

import WebsiteTypography from "@/components/website-typography/WebsiteTypography";
const {Paragraph} = WebsiteTypography;

type Props = {
    text?: string;
    maxLength?: number;
};

const ReadMoreComponent: FC<Props> = ({ text, maxLength = 500 }) => {

    if (!text) return null;

    const [visibleLength, setVisibleLength] = useState(maxLength);
    const isLongText = text.length > visibleLength;
    const visibleText = text.slice(0, visibleLength);

    const handleReadMore = () => {
        setVisibleLength((prev) => prev + maxLength);
    };

    return (
        <Paragraph
            centered
            color="primary"
            style={{ whiteSpace: 'pre-line' }}
        >
            {visibleText}
            {isLongText && (
                <span
                    onClick={handleReadMore}
                    style={{
                        color: '#2E527D',
                        cursor: 'pointer',
                        fontWeight: 680,
                        marginLeft: 8,
                    }}
                >
          {'... Read more'}
        </span>
            )}
        </Paragraph>
    );
};

export default ReadMoreComponent;