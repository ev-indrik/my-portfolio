import {type FC} from 'react';
import ScrollToTop from "@/hoc/scroll-to-top/ScrollToTop";

const NotFound: FC = () => {
    return (
        <div className={'container'}>
            <h1>{'Not Found Page with Lotty Cat'}</h1>
        </div>
    );
};

export default ScrollToTop(NotFound);