import {type FC} from 'react';
import Header from "../components/header/Header.tsx";
import Footer from '../components/footer/Footer.tsx';
// import {Outlet} from "react-router";
import BackToTopButton from "@/components/back-to-top-button/BackToTopButton";
// import useIsMobile from "@/hook/useIsMobile";
// import SoonForMobile from "@/components/soon-for-mobile/SoonForMobile";
import {ContactModalProvider} from "@/context/ContactModalContext";
import ModalContactForm from "@/components/modal-contact-form/ModalContactForm";

// const location = useLocation();
// const isHome = ['/home', '/'].includes(location.pathname);

    const WebsiteLayout: FC = () => {
        // const isMobile = useIsMobile();

        return (
            <ContactModalProvider>
                {/*{isMobile ? (*/}
                {/*    <SoonForMobile />*/}
                {/*) : (*/}
                    <div className={'layout-wrapper'}>
                        <BackToTopButton />
                        <Header />
                        {/*<div className={'pages-wrapper'}>*/}
                        {/*    <Outlet />*/}
                        {/*</div>*/}
                        <Footer />
                        <ModalContactForm />
                    </div>
                {/*)}*/}
            </ContactModalProvider>


            // ===>> the whole copy of the layout
            // <ContactModalProvider>
            //     {isMobile ? (
            //         <SoonForMobile />
            //     ) : (
            //         <div className={'layout-wrapper'}>
            //             <BackToTopButton />
            //             <Header />
            //             <div className={'pages-wrapper'}>
            //                 <Outlet />
            //             </div>
            //             <Footer />
            //             <ModalContactForm />
            //         </div>
            //     )}
            // </ContactModalProvider>
        );
    };

export default WebsiteLayout;