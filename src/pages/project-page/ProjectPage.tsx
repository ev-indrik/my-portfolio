import type {FC} from 'react';
import './ProjectPage.scss'
import {Row, Carousel} from "antd";

import WebsiteTypography from "@/components/website-typography/WebsiteTypography";

const {Title, Paragraph} = WebsiteTypography;

const ProjectPage: FC = () => {

    return (
        <div className={'project-page-wrapper'}>
            <div className={'container'}>

                <Row justify={'center'} style={{paddingBottom: 24}}>
                    <Title level={2} color={'primary'}>{'Easetech'}</Title>
                </Row>

                <Carousel
                    // autoplay
                >
                    <div className={'slider-item-wrapper'}>
                        <h3>1</h3>
                    </div>
                    <div className={'slider-item-wrapper'}>
                        <h3>2</h3>
                    </div>
                </Carousel>

            </div>
        </div>
    );
};

export default ProjectPage;