import {type FC, type SVGProps} from 'react';

import {ReactComponent as MainWhale} from './icons/main-whale.svg?react'

type IconTypes = 'test'
type IconColor = 'green' | 'red'

const icons: { [key: string]: FC<SVGProps<SVGSVGElement>> } = {
    'main-whale': MainWhale,
} as const

type Props = SVGProps<SVGSVGElement> & { type: IconTypes, color?: IconColor }

const SvgIcon: FC<Props> = ({...svgProps }) => {

    const Icon = icons['main-whale'] ?? null

    return (
        Icon && <Icon {...svgProps } />
    );
};

export { SvgIcon }