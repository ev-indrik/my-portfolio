import './HardSkillCard.scss'

import {type FC} from 'react';
import WebsiteTypography from "@/components/website-typography/WebsiteTypography";

import logoImg from '../images/logos/react.png'

const {Title, Paragraph} = WebsiteTypography;

const HardSkillCard: FC = () => {
    return (
        <div className={'hard-skill-item-wrapper'}>
            <div className={'skill-title-box'}>
                <div className={'logo-img-wrapper'}>
                    <img src={logoImg} alt={"React logo"}/>
                </div>
                <Title
                    level={3}
                    style={{paddingLeft: 16}}
                >
                    {'React'}
                </Title>
            </div>

            <Paragraph>
                {'Built and integrated user registration/login flows:\n' +
                    '\n' +
                    'Registration, login, forgot/reset password, email confirmation\n' +
                    '\n' +
                    'Routing setup with React Router, including NotFound pages for invalid users/companies\n'}
            </Paragraph>

        </div>
    );
};

export default HardSkillCard;