import './WebsiteDivider.scss'

import type {FC} from 'react';
import {SvgIcon} from "@/components/icon/SvgIcon";

type DividerColor = 'black' | 'white' | 'blue'

type DividerProps = {
    color?: DividerColor;
    isReversed?: boolean;
    marginNumber?: number;
}

const WebsiteDivider: FC<DividerProps> = ({color = 'black', isReversed = false, marginNumber = 40}) => {
    return (
            <div
                className={'divider-wrapper'}
                style={{marginTop: marginNumber, marginBottom: marginNumber}}
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