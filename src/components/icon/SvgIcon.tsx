import {type FC, type SVGProps} from 'react';

import MainWhale from './icons/main-whale.svg?react'
import MenuHome from './icons/menu-home.svg?react'
import MenuAbout from './icons/menu-about.svg?react'
import MenuProjects from './icons/menu-projects.svg?react'
import MenuContacts from './icons/menu-contacts.svg?react'
import Burger from './icons/burger.svg?react'
import Facebook from './icons/fb.svg?react'
import Instagram from './icons/instagram.svg?react'
import LinkedIn from './icons/linkedin.svg?react'
import Git from './icons/git.svg?react'
import GitSmall from './icons/gitsmall.svg?react'
import Plane from './icons/plane.svg?react'
import At from './icons/at.svg?react'
import Geo from './icons/geo.svg?react'
import Tel from './icons/tel.svg?react'

export type IconTypes = 'main-whale'
    | 'menu-home'
    | 'menu-about'
    | 'menu-projects'
    | 'menu-contacts'
    | 'burger'
    | 'facebook'
    | 'instagram'
    | 'linkedin'
    | 'git-small'
    | 'plane'
    | 'at'
    | 'git'
    | 'geo'
    | 'tel'

// type IconColor = 'green' | 'red'

const icons: { [key: string]: FC<SVGProps<SVGSVGElement>> } = {
    'main-whale': MainWhale,
    'menu-home': MenuHome,
    'menu-about': MenuAbout,
    'menu-projects': MenuProjects,
    'menu-contacts': MenuContacts,
    'burger': Burger,
    'facebook': Facebook,
    'instagram': Instagram,
    'linkedin': LinkedIn,
    'git': Git,
    'git-small': GitSmall,
    'plane': Plane,
    'geo': Geo,
    'tel': Tel,
    'at': At,
} as const

type Props = SVGProps<SVGSVGElement> & { type: IconTypes }

const SvgIcon: FC<Props> = ({type, color, ...svgProps}) => {

    const Icon = icons[type] ?? null

    return (
        Icon && <Icon {...svgProps} />
    );
};

export {SvgIcon}