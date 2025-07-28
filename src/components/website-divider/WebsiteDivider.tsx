import './WebsiteDivider.scss'

import type {FC} from 'react';
import {SvgIcon} from "@/components/icon/SvgIcon";

type DividerColor = 'black' | 'white' | 'blue'

type DividerProps = {
    color?: DividerColor;
    isReversed?: boolean;
    paddingTop?: number;
    paddingBottom?: number;
}

const WebsiteDivider: FC<DividerProps> = ({color = 'black', isReversed = false, paddingTop=32, paddingBottom=32}) => {
    return (
            <div
                className={'divider-wrapper'}
                style={{paddingTop: paddingTop, paddingBottom: paddingBottom}}
            >
                    <div className={`divider-content ${color}`}>
                        <div className="line" />
                        <div className={`img-whale-wrapper ${isReversed ? 'reversed' : ''}`}>
                            <SvgIcon type={'little-whale'}/>
                        </div>
                        <div className="line" />
                    </div>
            </div>
    );
};

export default WebsiteDivider;