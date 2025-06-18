import {type FC} from 'react';
import {Row, Space} from "antd";
import WebsiteButton from "../custom-button/WebsiteButton.tsx";
import {SvgIcon} from "../icon/SvgIcon.tsx";

const SocialButtons: FC = () => {
    return (
        <Row style={{paddingTop: 50}}>
            <Space>
                <WebsiteButton btnType={'icon'} icon={<SvgIcon type={'git'}/>} link={'https://github.com/ev-indrik'}/>
                <WebsiteButton btnType={'icon'} icon={<SvgIcon type={'linkedin'}/>} link={'https://www.linkedin.com/in/evindrik/'}/>
                <WebsiteButton btnType={'icon'} icon={<SvgIcon type={'facebook'}/>} link={'https://www.facebook.com/ev.indrik'}/>
                <WebsiteButton btnType={'icon'} icon={<SvgIcon type={'instagram'}/>} link={'https://www.instagram.com/ev_indrik'}/>
            </Space>
        </Row>
    );
};

export default SocialButtons;