import type {FC} from "react";
import {MailOutlined} from "@ant-design/icons";
import {Typography} from "antd";

import './MenuItem.scss'

const {Text} = Typography


const MenuItem: FC<{label: string}> = ({label})=>{
    return(
        <div className={'menu-item-wrapper'}>
            <MailOutlined/>
            <Text>{label}</Text>
        </div>
    )
}

export default MenuItem;