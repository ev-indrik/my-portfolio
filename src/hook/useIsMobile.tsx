import { useEffect, useState } from 'react';

const useIsMobile = (maxWidth = 992): boolean => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < maxWidth);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < maxWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [maxWidth]);

    return isMobile;
};

export default useIsMobile;
