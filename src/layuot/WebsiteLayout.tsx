import {type FC} from 'react';
import Header from "../components/header/Header.tsx";
import Footer from '../components/footer/Footer.tsx';
import {Outlet, useLocation} from "react-router";

const WebsiteLayout: FC = () => {
    const location = useLocation();
    const isHome = location.pathname === '/home';

    return (
        <div className={'layout-wrapper'}>
            <Header />

            <div className={'pages-wrapper'}>
                <Outlet />
            </div>

            {!isHome && <Footer />}
        </div>
    );
};

export default WebsiteLayout;