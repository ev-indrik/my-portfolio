import type {FC} from 'react';
import './ProjectPage.scss'
import {Row, Carousel} from "antd";

import WebsiteTypography from "@/components/website-typography/WebsiteTypography";

const {Title, Paragraph} = WebsiteTypography;

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const ProjectPage: FC = () => {

    return (
        <div className={'project-page-wrapper'}>
            <div className={'container'}>

                <Row justify={'center'} style={{paddingBottom: 24}}>
                    <Title level={2} color={'primary'}>{'Easetech'}</Title>
                </Row>

                <Carousel autoplay>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>

            </div>
        </div>
    );
};

export default ProjectPage;