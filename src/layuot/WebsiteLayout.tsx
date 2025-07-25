import {type FC} from 'react';
import Header from "../components/header/Header.tsx";
import Footer from '../components/footer/Footer.tsx';
import {Outlet} from "react-router";
import BackToTopButton from "@/components/back-to-top-button/BackToTopButton";
import useIsMobile from "@/hook/useIsMobile";
import SoonForMobile from "@/components/soon-for-mobile/SoonForMobile";

const WebsiteLayout: FC = () => {

    const isMobile = useIsMobile();

    if (isMobile) {
        return <SoonForMobile />;
    }

    // const location = useLocation();
    // const isHome = ['/home', '/'].includes(location.pathname);

    return (
        <div className={'layout-wrapper'}>
            <BackToTopButton />
            <Header />

            <div className={'pages-wrapper'}>
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default WebsiteLayout;