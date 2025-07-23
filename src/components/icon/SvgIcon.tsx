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
import Pdf from './icons/pdf.svg?react'
import LittleWhale from './icons/little-whale.svg?react'
import TickedSquare from './icons/ticked-square.svg?react'
import RocketGhost from './icons/rocket-ghost.svg?react'
import GithubGhost from './icons/github-ghost.svg?react'
import ArrowShort from './icons/arrow-short.svg?react'
import BlackWhale from './icons/black-whale.svg?react'

export type IconTypes =
    'main-whale'
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
    | 'pdf'
    | 'little-whale'
    | 'ticked-square'
    | 'github-ghost'
    | 'rocket-ghost'
    | 'arrow-short'
    | 'waves-whale'
    | 'black-whale'

// type IconColor = 'green' | 'red'

const icons: { [key: string]: FC<SVGProps<SVGSVGElement>> } = {
    'black-whale': BlackWhale,
    'arrow-short': ArrowShort,
    'github-ghost': GithubGhost,
    'rocket-ghost': RocketGhost,
    'ticked-square': TickedSquare,
    'little-whale': LittleWhale,
    'pdf': Pdf,
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