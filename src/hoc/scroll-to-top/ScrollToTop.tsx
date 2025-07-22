import { useLayoutEffect } from "react";
import type {FC} from "react";
import { useLocation } from "react-router-dom";

function SrollToTop<T extends object>(Wrapped: FC<T>): FC<T> {
    return (props: T) => {
        const { pathname, hash } = useLocation();

        useLayoutEffect(() => {
            if (!hash) {
                window.scrollTo(0, 0);
            }
        }, [pathname, hash]);

        return <Wrapped {...props} />;
    };
}

export default SrollToTop;