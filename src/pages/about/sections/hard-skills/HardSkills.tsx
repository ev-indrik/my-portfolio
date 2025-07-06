import './HardSkills.scss'

import {type FC} from 'react';

import hardSkillsImg from './images/hard-skills.png'

import WebsiteTypography from "@/components/website-typography/WebsiteTypography";
import HardSkillCard from "@/pages/about/sections/hard-skills/hard-skill-card/HardSkillCard";

const {Title} = WebsiteTypography;

type hardSkillsType = {
    id: string,
    image: string
    title: string
    paragraph: string
    isLogoStandsAlone?: boolean
}

const hardSkillsContent: hardSkillsType[] = [
    {
        id: 'react',
        image: 'react',
        title: 'React',
        paragraph: 'Developed component-based interfaces with React, using reusable logic through hooks and context\n' +
            '\n' +
            'Set up dynamic routing with React Router, including role-based NotFound pages and protected routes\n' +
            '\n' +
            'Built and connected forms (auth, filters, search) with controlled inputs and validation, integrating API calls via fetch/axios etc',
    },
    {
        id: 'typescript',
        image: 'ts',
        title: 'TypeScript',
        paragraph: 'Used TypeScript to enforce strict typing and improve code readability in all components and API logic\n' +
            'Integrated TypeScript with external libraries (e.g., Ant Design, React Router) to ensure safe component props and data flow etc',
    },
    {
        id: 'html',
        image: 'html',
        title: 'HTML',
        paragraph: 'Built accessible and semantic HTML structures following best practices and SEO principles.\n'+
            'Worked with forms, tables, and multimedia content to create well-structured layouts across projects etc'
    },
    {
        id: 'antdesign',
        image: 'antd',
        title: 'Ant Design',
        paragraph: 'Built responsive interfaces using Ant Design components with consistent layout and theming\n' +
            'Customized elements like tables, forms, modals, and tooltips to match app logic and UX needs\n' +
            'Integrated Ant Design with TypeScript and React context for type-safe, dynamic behavior across views etc',
        isLogoStandsAlone: true,
    },
    {
        id: 'javascript',
        image: 'js',
        title: 'Java Script',
        paragraph: 'Built interactive user interfaces using modern JavaScript (ES6+) features such as destructuring, optional chaining, and arrow functions\n' +
            'Worked with fetch and async/await to connect with REST APIs, handle errors, and process responses\n' +
            'Implemented reusable utility functions for filtering, sorting, validating inputs, and managing application state\n' +
            'Created interactive forms with validation, conditional rendering etc'
    },
    {
        id: 'sass',
        image: 'sass',
        title: 'Sass/less',
        paragraph: 'Built flexible, scalable styles using variables, mixins and nesting\n' +
            'Implemented responsive design with media queries and dynamic theming (light/dark modes) etc'
    },
    {
        id: 'css',
        image: 'css',
        title: 'CSS',
        paragraph: 'Crafted clean, responsive layouts using Flexbox and Grid to ensure smooth experiences across devices.\n' +
            'Paid special attention to visual clarity, accessibility, and cohesive styling throughout the interface etc'
    },
    {
        id: 'strapi',
        image: 'strapi',
        title: 'Strapi',
        paragraph: 'Integrated Strapi services with React front-end to deliver dynamic, content-driven pages.\n' +
            'Consumed REST/GraphQL endpoints, handled authentication tokens, and rendered localized content and media.'
    }
]

const HardSkills: FC = () => {
    return (
        <div className={'hard-skills-wrapper '}>
            <div className={'container'}>

                <div className={'title-box'}>
                    <div className={'hard-skills-img-wrapper'}>
                        <img src={hardSkillsImg} alt={'Engineering skills logo'}/>
                    </div>

                    <Title level={2}>{'My hard skills'}</Title>
                </div>

                <HardSkillCard/>

                <div className={'skills-div-container'}>
                    <div className="card react">React</div>
                    <div className="card typescript">TypeScript</div>
                    <div className="card html">HTML</div>
                    <div className="card antd">Ant Design</div>
                    <div className="card javascript">JavaScript</div>
                    <div className="card sass">Sass</div>
                    <div className="card css">CSS</div>
                    <div className="card strapi">Strapi</div>
                </div>

            </div>
        </div>
    );
};

export default HardSkills;