import {type FC} from 'react';
import Header from "../components/header/Header.tsx";
import Footer from '../components/footer/Footer.tsx';
import {Outlet} from "react-router";
import BackToTopButton from "@/components/back-to-top-button/BackToTopButton";
import {ContactModalProvider} from "@/context/ContactModalContext";
import ModalContactForm from "@/components/modal-contact-form/ModalContactForm";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";

// const location = useLocation();
// const isHome = ['/home', '/'].includes(location.pathname);

const WebsiteLayout: FC = () => {

    const {xxl, xl, lg, md} = useBreakpoint()

    return (
        <ContactModalProvider>
            <div className={'layout-wrapper'}>
                {(xxl || xl || lg || md) && <BackToTopButton/>}

                <Header/>

                <div className={'pages-wrapper'}>
                    <Outlet/>
                </div>
                <Footer/>
                <ModalContactForm/>
            </div>

        </ContactModalProvider>
    );
};

export default WebsiteLayout;