import {type FC} from 'react';
import {Row, Space} from "antd";
import WebsiteButton from "../website-button/WebsiteButton.tsx";
import {SvgIcon} from "../icon/SvgIcon.tsx";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";

const SocialButtons: FC = () => {

    const {xxl, xl, lg, md} = useBreakpoint()

    return (
        <Row style={{paddingTop: 50, width: '100%'}}>
            <Space
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: (xxl||xl||lg||md) ? undefined : '100%',
                }}
            >
                <WebsiteButton btnType={'icon'} icon={<SvgIcon type={'git'}/>} link={'https://github.com/ev-indrik'}/>
                <WebsiteButton btnType={'icon'} icon={<SvgIcon type={'linkedin'}/>} link={'https://www.linkedin.com/in/evindrik/'}/>
                <WebsiteButton btnType={'icon'} icon={<SvgIcon type={'facebook'}/>} link={'https://www.facebook.com/ev.indrik'}/>
                <WebsiteButton btnType={'icon'} icon={<SvgIcon type={'instagram'}/>} link={'https://www.instagram.com/ev_indrik'}/>
            </Space>
        </Row>
    );
};

export default SocialButtons;