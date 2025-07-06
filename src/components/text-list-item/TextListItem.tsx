import './TextListItem.scss'

import { type FC } from 'react';

type TextListProps = {
    text: string;
};

const TextListItem: FC<TextListProps> = ({text}) => {
    return (
        <div className={"text-list-item"}>
            <span className={"bullet"} />
            <span>{text}</span>
        </div>
    );
};

export default TextListItem;