import {type FC} from 'react';
import ScrollToTop from "@/hoc/scroll-to-top/ScrollToTop";
import HeroSection from "@/components/hero-section/HeroSection";

import meImg from '../../components/hero-section/images/me-img.png'
import heroSectionContent from "@/data/heroSectionContent.json";
import {message} from "antd";
const sectionData = heroSectionContent['contact'];

const Contact: FC = () => {

    const [messageApi, contextHolder] = message.useMessage();

    const onShareClick = async () => {
        try {
            await navigator.clipboard.writeText("https://ev-indrik-portfolio.netlify.app/");
            messageApi.open({
                type: 'success',
                content: 'Link copied',
                style: {
                    marginTop: '20vh',
                },
            });
        } catch (err) {
            messageApi.open({
                type: 'error',
                content: 'Failed to copy',
                style: {
                    marginTop: '20vh',
                },
            });
        }
    };

    return (
        <>
            {contextHolder}
            <HeroSection
                mainTitle={sectionData.mainTitle}
                description={sectionData.description}
                imageSrc={meImg}
                buttonText={sectionData.buttonText}
                spanNumber={12}
                btnType={'secondary'}
                svgType={'share'}
                onClick={onShareClick}
            />
        </>
    );
};

export default ScrollToTop(Contact);