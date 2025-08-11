import {type FC} from 'react';
import ScrollToTop from "@/hoc/scroll-to-top/ScrollToTop";
import HeroSection from "@/components/hero-section/HeroSection";

import meImg from '../../components/hero-section/images/me-img.png'
import heroSectionContent from "@/data/heroSectionContent.json";
import ContactsBlock from "@/pages/contacts/sections/contacs-block/ContactsBlock";
import ContactFormSection from "@/pages/contacts/sections/contact-form-section/ContactFormSection";
import {useMessageApi} from "@/context/MessageContext";
import useIsMobile from "@/hook/useIsMobile";
import SoonForMobile from "@/components/soon-for-mobile/SoonForMobile";
const sectionData = heroSectionContent['contact'];

const Contacts: FC = () => {

    const messageApi = useMessageApi();
    const isMobile = useIsMobile();

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

    return isMobile ? (
        <SoonForMobile />
    ) : (
        <>
            <HeroSection
                mainTitle={sectionData.mainTitle}
                titleColor={'primary'}
                description={sectionData.description}
                imageSrc={meImg}
                buttonText={sectionData.buttonText}
                spanNumber={12}
                btnType={'secondary'}
                svgType={'share'}
                onClick={onShareClick}
                offsetNumber={1}
                imgPaddingBottom={48}
            />
            <ContactsBlock />
            <ContactFormSection />
        </>
    );
};

export default ScrollToTop(Contacts);