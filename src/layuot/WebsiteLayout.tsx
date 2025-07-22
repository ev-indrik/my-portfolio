import {type FC} from 'react';
import Header from "../components/header/Header.tsx";
import Footer from '../components/footer/Footer.tsx';
import {Outlet} from "react-router";

const WebsiteLayout: FC = () => {
    // const location = useLocation();
    // const isHome = ['/home', '/'].includes(location.pathname);

    return (
        <div className={'layout-wrapper'}>
            <Header />

            <div className={'pages-wrapper'}>
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default WebsiteLayout;