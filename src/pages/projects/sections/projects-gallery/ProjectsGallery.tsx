import './ProjectsGallery.scss';

import type {FC} from 'react';
import TitleIconGroup from "@/components/title-icon-group/TitleIconGroup";
import logoImg from '../../../../components/title-icon-group/images/hard-skills.png'

const ProjectsGallery: FC = () => {
    return (
        <div className={'projects-gallery-wrapper'}>
            <div className={'container'}>

                <TitleIconGroup content={{title: 'My Projects', image: logoImg}}/>

                <div className={'gallery-wrapper'}>

                    <div className={'project-item-wrapper'}>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectsGallery;