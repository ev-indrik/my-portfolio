import type {FC} from "react";
import {Typography} from "antd";
import {type IconTypes, SvgIcon} from "../../icon/SvgIcon.tsx";

import './MenuItem.scss'

const {Text} = Typography


const MenuItem: FC<{label: string, iconType: IconTypes}> = ({label, iconType})=>{
    return(
        <div className={'menu-item-wrapper'}>
            <SvgIcon type={iconType}/>
            <Text className={'menu-item-text'}>{label}</Text>
        </div>
    )
}

export default MenuItem;