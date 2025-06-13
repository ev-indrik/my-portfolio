import {type FC} from 'react';
import Header from "../components/header/Header.tsx";
import {Outlet} from "react-router";

const NoFooterLayout: FC = () => {
    return (
        <div className={'layout-wrapper'}>
            <Header/>
            <div className={'pages-wrapper'}>
            <Outlet/>
            </div>
        </div>
    );
};

export default NoFooterLayout;