import {type FC} from 'react';
import ScrollToTop from "@/hoc/scroll-to-top/ScrollToTop";
import HeroSection from "@/components/hero-section/HeroSection";

import meImg from '../../components/hero-section/images/me-img.png'
import heroSectionContent from "@/data/heroSectionContent.json";
import ContactsBlock from "@/pages/contacts/sections/contacs-block/ContactsBlock";
import ContactForm from "@/pages/contacts/sections/contact-form/ContactForm";
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
                spanNumber={12}
                btnType={'secondary'}
                svgType={'share'}
                onClick={onShareClick}
                imgBottomSpace={48}
            />
            <ContactsBlock />
            <ContactForm />
        </>
    );
};

export default ScrollToTop(Contacts);