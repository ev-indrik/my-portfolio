import type {TechContent} from "@/components/tech-logo-item/TechLogoItem";

export type hardSkillsType = {
    id: string,
    image: string
    title: string
    paragraph: string
    isLogoStandsAlone?: boolean
}

export type TickedBox = {
    tickedTitle: string;
    tickedDescription: string;
};

// ===>> Project description

export type ProjectItem = {
    id: string;
    title: string;
    description: string;
    detailedDescription?: string;
    projectImgs: string[];
    techLogos?: TechContent[];
    tickedBoxes?: TickedBox[];
    githubUrl?: string;
    deployedUrl?: string;
    bgImgUpper?: string;
    bgImgLower?: string;
    bgSectionImg?: string;
    isReversed?: boolean;
    isDivider?: boolean;
    isDividerReversed?: boolean;
}