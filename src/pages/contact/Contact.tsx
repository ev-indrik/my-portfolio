import {type FC} from 'react';
import ScrollToTop from "@/hoc/scroll-to-top/ScrollToTop";

const Contact: FC = () => {
    return (
        <div className={'container'}>
            <h3>{'Contact page'}</h3>
        </div>
    );
};

export default ScrollToTop(Contact);