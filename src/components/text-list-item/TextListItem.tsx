import './TextListItem.scss'

import { type FC } from 'react';

import WebsiteTypography from "@/components/website-typography/WebsiteTypography";

const {Text} = WebsiteTypography;

type TextListProps = {
    text: string;
};

const TextListItem: FC<TextListProps> = ({text}) => {
    return (
        <div className={"text-list-item"}>
            <span className={"bullet"} />
            <Text>{text}</Text>
        </div>
    );
};

export default TextListItem;