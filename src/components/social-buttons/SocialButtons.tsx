import {type FC} from 'react';
import {Row} from "antd";
import WebsiteButton from "../website-button/WebsiteButton.tsx";
import {type IconColorType, SvgIcon} from "../icon/SvgIcon.tsx";

type Props = {
    color?: IconColorType
}

const SocialButtons: FC<Props> = ({color}) => {

    return (
        <Row style={{paddingTop: 50, width: '100%'}} justify={'space-between'}>
                <WebsiteButton btnType={'icon'} icon={<SvgIcon type={'git'} color={color}/>} link={'https://github.com/ev-indrik'}/>
                <WebsiteButton btnType={'icon'} icon={<SvgIcon type={'linkedin'} color={color}/>} link={'https://www.linkedin.com/in/evindrik/'}/>
                <WebsiteButton btnType={'icon'} icon={<SvgIcon type={'facebook'} color={color}/>} link={'https://www.facebook.com/ev.indrik'}/>
                <WebsiteButton btnType={'icon'} icon={<SvgIcon type={'instagram'} color={color}/>} link={'https://www.instagram.com/ev_indrik'}/>
        </Row>
    );
};

export default SocialButtons;