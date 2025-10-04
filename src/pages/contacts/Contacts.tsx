import {type FC} from 'react';
import ScrollToTop from "@/hoc/scroll-to-top/ScrollToTop";
import HeroSection from "@/components/hero-section/HeroSection";

import meImg from '../../components/hero-section/images/contacts-hero-img.png'
import heroSectionContent from "@/data/heroSectionContent.json";
import ContactsBlock from "@/pages/contacts/sections/contacs-block/ContactsBlock";
import ContactFormSection from "@/pages/contacts/sections/contact-form-section/ContactFormSection";
import {useMessageApi} from "@/context/MessageContext";
const sectionData = heroSectionContent['contact'];

const Contacts: FC = () => {

    const messageApi = useMessageApi();

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
            <HeroSection
                mainTitle={sectionData.mainTitle}
                titleColor={'primary'}
                description={sectionData.description}
                imageSrc={meImg}
                buttonText={sectionData.buttonText}
                btnType={'ghost'}
                svgType={'share'}
                onClick={onShareClick}
                offsetNumber={3}
                // imgPaddingBottom={48}
            />
            <ContactsBlock />
            <ContactFormSection />
        </>
    );
};

export default ScrollToTop(Contacts);