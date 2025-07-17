import './WebsiteDivider.scss'

import type {FC} from 'react';
import {SvgIcon} from "@/components/icon/SvgIcon";

type DividerColor = 'black' | 'white' | 'blue'

type DividerProps = {
    color?: DividerColor;
    isReversed?: boolean;
}

const WebsiteDivider: FC<DividerProps> = ({color='black', isReversed=false}) => {
    return (
        <div className={`divider-wrapper ${color}`}>
            <div className={'container'}>
                <div className={`img-whale-wrapper ${isReversed ? 'reversed' : ''}`}>
                <SvgIcon type={'little-whale'} />
                </div>
            </div>
        </div>
    );
};

export default WebsiteDivider;