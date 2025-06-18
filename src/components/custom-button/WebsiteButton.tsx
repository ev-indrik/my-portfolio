import {type CSSProperties, type FC, type MouseEventHandler, type ReactNode} from 'react';
import {Button as AntButton, type ButtonProps} from "antd";
import classNames from 'classnames';

import './WebsiteButton.scss'

type WebButtonProps = {
    btnType?: "primary" | "secondary" | 'ghost' | 'text' | 'icon';
    icon?: ReactNode;
    text?: string;
    children?: ReactNode;
    style?: CSSProperties;
    className?: string;
    link?: string;
    onClick?: MouseEventHandler<HTMLElement>;
    // btnSize?: "small" | "middle" | "large";
}

const WebsiteButton: FC<WebButtonProps & ButtonProps> = ({
                                                             btnType = 'primary',
                                                             icon,
                                                             // btnSize = 'middle',
                                                             text,
                                                             children,
                                                             className,
                                                             link,
                                                             onClick,
                                                             ...props
                                                         }) => {
    const btnClasses = classNames('custom-button', className,
        {
            'primary': btnType === 'primary',
            'secondary': btnType === 'secondary',
            'ghost': btnType === 'ghost',
            'text': btnType === 'text',
            'icon': btnType === 'icon',
        },
        // {
        //     'btn-small': btnSize === 'small',
        //     'btn-medium': btnSize === 'middle',
        //     'btn-large': btnSize === 'large',
        // }
    );

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        if (link) {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <AntButton icon={icon} className={btnClasses} {...props} onClick={handleClick}>
            {text}
            {children ? children : null}
        </AntButton>
    );
};

export default WebsiteButton;